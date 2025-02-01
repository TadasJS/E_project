import { loginModel } from "../models/loginModel.mjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "../.env.dev" });

const loginController = {
  postLogin: async (req, res) => {
    const { email, password } = req.body;

    const checkLoginValues = await loginModel.checkLoginUser(email, password);

    if (!checkLoginValues) {
      return res.status(409).json({
        status: "err",
        msg: "Check your credentials, user is not loged in.",
      });
    }

    delete checkLoginValues.password;

    const token = jwt.sign(checkLoginValues, process.env.PRIVAT_KEY);

    res.status(200).json({ status: "ok", msg: "user loged in", token: token });
  },
};

export { loginController };
