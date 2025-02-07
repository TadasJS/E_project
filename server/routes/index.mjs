import express from "express";
import { users } from "./usersRegisterRoutes.mjs";
import { login } from "./userLoginRoutes.mjs";
import { advert } from "./advert.mjs";


const api = express.Router();

api.use("/user/login", login);
api.use("/user/register", users);

api.use("/advert", advert);


api.use("/", (req, res) => {
  res.status(200).json({ status: "ok", msg: " API SERVER : page not created yet" });
});

export { api };
