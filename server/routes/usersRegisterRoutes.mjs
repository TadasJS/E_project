import express from "express";
import { registerController } from "../controllers/registerController.mjs";

const users = express.Router();

users.post("/", registerController.postUsers);

export { users };
