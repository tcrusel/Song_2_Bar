import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import userRepository from "./userRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const { lastname, firstname, email, hashed_password } = req.body;

    const role = "user";

    if (
      !lastname ||
      lastname === "" ||
      typeof lastname !== "string" ||
      !firstname ||
      firstname === "" ||
      typeof firstname !== "string" ||
      !email ||
      email === "" ||
      typeof email !== "string" ||
      !hashed_password ||
      hashed_password === ""
    ) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
    } else {
      await userRepository.create({
        lastname,
        firstname,
        role,
        email,
        hashed_password,
      });

      res.sendStatus(StatusCodes.CREATED);
    }
  } catch (err) {
    next(err);
  }
};

export default { add };
