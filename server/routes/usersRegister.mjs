import express from "express";

const users = express.Router();

users.post("/", usersController.postUsers);

export { users };
