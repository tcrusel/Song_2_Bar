import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import groupRepository from "./groupRepository";

const read: RequestHandler = async (req, res, next) => {
  try {
    const groupId = Number(req.params.id);
    const group = await groupRepository.read(groupId);

    if (!group) {
      res.status(StatusCodes.NOT_FOUND).send("Groupe introuvable");
    } else {
      res.status(StatusCodes.OK).json(group);
    }
  } catch (err) {
    next(err);
  }
};

export default { read };
