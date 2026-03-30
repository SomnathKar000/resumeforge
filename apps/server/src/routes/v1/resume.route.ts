import { Router } from "express";

const router = Router();

router.post("/generate", (req, res) => {
  res.json({
    success: true,
    message: "Resume generated successfully",
  });
});

export default router;
