import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import userProfileRepository from "./userProfileRepository";

const getUserProfile: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number(req.params.id);

    if (!userId) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "User ID is required" });
      return;
    }

    const userProfile = await userProfileRepository.getUserProfile(userId);
    res.status(StatusCodes.OK).json(userProfile);
  } catch (err) {
    next(err);
  }
};

export default { getUserProfile };
