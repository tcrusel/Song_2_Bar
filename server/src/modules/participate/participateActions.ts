import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import participateRepository from "./participateRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    if (
      !req.body.userId ||
      !req.body.eventId ||
      typeof req.body.userId !== "number" ||
      typeof req.body.eventId !== "number"
    ) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
    }

    const newParticipation = {
      userId: req.body.userId,
      eventId: req.body.eventId,
    };

    const affectedRows = await participateRepository.create(newParticipation);

    if (affectedRows === 0) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "La création de la participation a échoué" });
    } else {
      res.status(StatusCodes.CREATED).json({ affectedRows });
    }
  } catch (err) {
    next(err);
  }
};

export default { add };
