import express from "express";
import { users } from "./usersRegisterRoutes.mjs";
import { login } from "./userLoginRoutes.mjs";
import { procedure } from "./procedureRoutes.mjs";
import { procedReg } from "./procedRegRoutes.mjs";
import { rating } from "./procedRatingRoutes.mjs";

const api = express.Router();

api.use("/user/login", login);
api.use("/user/register", users);

api.use("/procedure", procedure);
api.use('/procedreg', procedReg);
api.use('/rating', rating);

api.use("/", (req, res) => {
  res.status(200).json({ status: "ok", msg: " API SERVER : page not created yet" });
});

export { api };
