import { PDFParse } from "pdf-parse";
import mammoth from "mammoth";
import AppError from "../utils/AppError";
import { RESUME_MIME_TYPES } from "../constants";

/**
 * Extracts raw text from a PDF buffer using pdf-parse v2.
 *
 * @param buffer - The file buffer from multer (req.file.buffer)
 * @returns Extracted plain-text string
 */
const extractTextFromPDF = async (buffer: Buffer): Promise<string> => {
  // pdf-parse v2 uses a class-based API: new PDFParse(LoadParameters)
  const parser = new PDFParse({
    data: buffer,
    verbosity: 0, // suppress console noise from pdfjs-dist
  });

  const result = await parser.getText();
  const text = result.text?.trim();

  // Clean up internal pdfjs worker to prevent memory leaks
  await parser.destroy();

  if (!text) {
    throw new AppError(
      "Could not extract any text from the PDF. " +
        "The file may be image-based or corrupted.",
      422
    );
  }

  return text;
};

/**
 * Extracts raw text from a DOCX/DOC buffer using mammoth.
 *
 * @param buffer - The file buffer from multer (req.file.buffer)
 * @returns Extracted plain-text string
 */
const extractTextFromDOCX = async (buffer: Buffer): Promise<string> => {
  const result = await mammoth.extractRawText({ buffer });
  const text = result.value?.trim();

  // Log any warnings from mammoth (e.g., unsupported elements)
  result.messages.forEach((msg) => {
    if (msg.type === "warning") {
      console.warn("[parse.service] mammoth warning:", msg.message);
    }
  });

  if (!text) {
    throw new AppError(
      "Could not extract any text from the document. " +
        "The file may be empty or corrupted.",
      422
    );
  }

  return text;
};

/**
 * Returns true if the file is a PDF, either by MIME type or magic bytes (%PDF).
 */
const isPDF = (mimetype: string, buffer: Buffer): boolean => {
  if (mimetype === RESUME_MIME_TYPES.PDF) return true;
  // Fallback: inspect the first 4 magic bytes
  return buffer.slice(0, 4).toString("ascii") === "%PDF";
};

/**
 * Returns true if the file is a Word document (DOC/DOCX) by MIME type.
 */
const isDOCX = (mimetype: string): boolean =>
  mimetype === RESUME_MIME_TYPES.DOCX ||
  mimetype === RESUME_MIME_TYPES.DOC;

/**
 * Parses a resume file buffer and returns its raw text content.
 *
 * Dispatch rules:
 *  - PDF  → pdf-parse v2 (PDFParse class)
 *  - DOCX → mammoth
 *
 * @param buffer   - The file buffer from multer (req.file.buffer)
 * @param mimetype - The MIME type from multer (req.file.mimetype)
 * @returns Extracted plain-text string
 * @throws AppError (400/415/422) on unsupported type or extraction failure
 */
const parseResumeFile = async (
  buffer: Buffer,
  mimetype: string
): Promise<string> => {
  if (isPDF(mimetype, buffer)) {
    return extractTextFromPDF(buffer);
  }

  if (isDOCX(mimetype)) {
    return extractTextFromDOCX(buffer);
  }

  throw new AppError(
    `Unsupported file type: "${mimetype}". Please upload a PDF or DOCX file.`,
    415
  );
};

export { parseResumeFile };
