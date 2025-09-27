import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import groupRepository from "./groupRepository";

const read: RequestHandler = async (req, res, next) => {
  try {
    const musicGroupId = Number(req.params.id);
    const musicGroup = await groupRepository.find(musicGroupId);

    if (!musicGroup) {
      res.status(StatusCodes.NOT_FOUND).send("Groupe introuvable");
    } else {
      res.status(StatusCodes.OK).json(musicGroup);
    }
  } catch (err) {
    next(err);
  }
};

export default { read };
