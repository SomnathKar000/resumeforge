import multer from "multer";
import AppError from "../utils/AppError";
import { ALLOWED_MIME_TYPES } from "../constants";

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new AppError("Invalid file type", 400));
    }
  },
});

export default upload;
