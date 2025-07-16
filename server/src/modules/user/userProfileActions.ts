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

    const userInfo = await userProfileRepository.getUserProfile(userId);
    
    if (!userInfo) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "User not found" });
      return;
    }

    res.status(StatusCodes.OK).json(userInfo);
  } catch (err) {
    next(err);
  }
};

export default { getUserProfile };
