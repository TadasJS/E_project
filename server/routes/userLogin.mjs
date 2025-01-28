import express from "express";

const login = express.Router();

login.post("/", loginCntroller.postLogin);

export { login };
