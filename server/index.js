import express from "express";
import mongoose from "mongoose";
import { router } from "./router.js";
import cors from "cors";
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
const PORT = 3001;
const app = express();
app.use(express.json());
app.use(cors({ ...corsOptions }));
app.use("/", router);
const launch = async () => {
  try {
    app.listen(PORT, () => {
      mongoose.connect(
        "mongodb+srv://Luffy:Demion2289@cluster0.3d418.mongodb.net/game?retryWrites=true&w=majority",
        () => console.log("MongoDB connected")
      );
      console.log(`server launch ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};
launch();
