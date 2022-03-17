import Router from "express";
import userController from "./userController.js";

export const router = new Router();

router.post("/", userController.auth);

router.get("/:id", userController.getRecord);

router.post("/score", userController.newScore);
