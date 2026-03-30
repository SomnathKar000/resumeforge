import express from "express";
import resumeRoutes from "./routes/v1/resume.route";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;
const API_PREFIX = process.env.API_PREFIX || "/api/v1";

app.use(API_PREFIX, resumeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
