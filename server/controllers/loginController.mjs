import { loginModel } from "../models/loginModel.mjs";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "../.env.dev" });

const loginController = {
  postLogin: async (req, res) => {
    const { email, password } = req.body;

    const checkLoginValues = await loginModel.checkLoginUser(email, password);

    if (checkLoginValues === 0) {
      return res.status(409).json({
        status: "err",
        msg: "Check your credentials, user not loged in.",
      });
    }

    const isMatch = await bcrypt.compare(password, checkLoginValues.password);

    if (!isMatch) {
      return res.status(409).json({
        status: "err",
        msg: "Check your credentials, user not loged in.",
      });
    }

    delete checkLoginValues.password;

    const token = jwt.sign(checkLoginValues, process.env.PRIVAT_KEY);

    res.status(200).json({ status: "ok", msg: "user loged in", token: token });
  },
};

export { loginController };
