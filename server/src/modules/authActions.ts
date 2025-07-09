import argon2 from "argon2";
import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import type { MyPayload } from "../types/MyPayload";
import userRepository from "./user/userRepository";

const login: RequestHandler = async (req, res, next) => {
  try {
    const user = await userRepository.readByEmail(req.body.email);

    if (user == null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(
      user.hashed_password,
      req.body.password,
    );

    if (verified) {
      const { hashed_password, ...userWithoutHashedPassword } = user;

      const myPayload: MyPayload = {
        sub: user.id.toString(),
        role: user.role,
      };

      const token = await jwt.sign(
        myPayload,
        process.env.APP_SECRET as string,
        {
          expiresIn: "3h",
        },
      );

      res.json({
        token,
        user: userWithoutHashedPassword,
      });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

const hashPassword: RequestHandler = async (req, res, next) => {
  try {
    const { password, confirmPassword } = req.body;

    if (
      !password ||
      password === "" ||
      password.length < 8 ||
      confirmPassword !== password
    ) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
    } else {
      const hashedPassword = await argon2.hash(password);
      req.body.hashed_password = hashedPassword;
      req.body.password = undefined;

      next();
    }
  } catch (err) {
    next(err);
  }
};

export default { login, hashPassword };
