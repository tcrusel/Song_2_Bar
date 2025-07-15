import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import participateRepository from "./participateRepository";

const add: RequestHandler = async (req, res, next) => {
  if (!req.auth.role) {
    res.sendStatus(StatusCodes.FORBIDDEN);
    return;
  }

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
      userId: Number.parseInt(req.auth.sub),
      eventId: req.body.eventId,
    };

    const affectedRows = await participateRepository.create(newParticipation);

    if (affectedRows <= 0) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "La création de la participation a échoué" });
    } else {
      res.status(StatusCodes.CREATED);
    }
  } catch (err) {
    next(err);
  }
};

const remove: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const userId = Number(req.params.userId);
    const eventId = Number(req.params.eventId);

    if (!userId || !eventId || Number.isNaN(userId) || Number.isNaN(eventId)) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
      return;
    }

    const affectedRows = await participateRepository.delete(userId, eventId);

    if (affectedRows <= 0) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Echec de la suppression" });
      return;
    }

    res.sendStatus(StatusCodes.NO_CONTENT);
  } catch (err) {
    next(err);
    return;
  }
};

export default { add, remove };
