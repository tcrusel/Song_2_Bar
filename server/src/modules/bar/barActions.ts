import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import barRepository from "./barRepository";

const read: RequestHandler = async (req, res, next) => {
  try {
    const barId = Number(req.params.id);
    const bar = await barRepository.find(barId);

    if (!bar) {
      res.status(StatusCodes.NOT_FOUND).json({ error: "Bar not found" });
    } else {
      res.status(StatusCodes.OK).json(bar);
    }
  } catch (err) {
    next(err);
  }
};

export default { read };
