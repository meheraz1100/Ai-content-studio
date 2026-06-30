import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import aiRoutes from "./routes/ai.js";

dotenv.config();

const app = express();

// মিডলওয়্যার সবার আগে
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());

// রাউট তারপর
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Content Studio API Running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});