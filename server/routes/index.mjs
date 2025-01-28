import express from "express";
import { users } from "./usersRegister.mjs";
import { login } from "./userLogin.mjs";

const api = express.Router();

api.use("users/login", login);
api.use("users/register", users);

export { api };
