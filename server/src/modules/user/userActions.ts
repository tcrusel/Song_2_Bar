import type { RequestHandler } from "express";
import UserRepository from "./userRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newUser = {
      email: req.body.email,
      password: req.body.password,
    };

    const insertId = await UserRepository.create(newUser);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { add };
