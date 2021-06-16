import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cross origin resource sharing
app.use(cors());

async function setup() {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

setup().then(() => {
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
});
