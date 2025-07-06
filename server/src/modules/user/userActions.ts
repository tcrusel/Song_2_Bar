import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import userRepository from "./userRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newUser = {
      lastname: req.body.lastname,
      firstname: req.body.firstname,
      role: "user",
      email: req.body.email,
      password: req.body.password,
    };

    const insertId = await userRepository.create(newUser);

    res.sendStatus(StatusCodes.CREATED);
  } catch (err) {
    next(err);
  }
};

export default { add };
