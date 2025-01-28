import express from "express";
import { users } from "./usersRegister.mjs";
import { login } from "./userLogin.mjs";

const api = express.Router();

api.use("/user/login", login);
api.use("/user/register", users);

api.use('/', (req, res) => {
    res.status(200).json({status: 'ok', msg: 'page not created yet'})
})

export { api };
