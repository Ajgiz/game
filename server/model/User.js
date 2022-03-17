import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    score: { type: Array, default: [] },
  },
  { minimize: false }
);

export default mongoose.model("user", User);
