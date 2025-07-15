import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import favouriteRepository from "./favouriteRepository";

const add: RequestHandler = async (req, res, next) => {
  if (!req.auth.role) {
    res.sendStatus(StatusCodes.FORBIDDEN);
    return;
  }

  try {
    if (
      !req.body.userId ||
      !req.body.barId ||
      typeof req.body.userId !== "number" ||
      typeof req.body.barId !== "number"
    ) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
    }

    const newFavouriteBar = {
      userId: Number.parseInt(req.auth.sub),
      barId: req.body.barId,
    };

    const affectedRows =
      await favouriteRepository.favouriteBar(newFavouriteBar);

    if (affectedRows <= 0) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "La favorisation du bar a échoué" });
    } else {
      res.status(StatusCodes.CREATED).json({ affectedRows });
    }
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  if (!req.auth.role) {
    res.sendStatus(StatusCodes.FORBIDDEN);
    return;
  }

  try {
    const userId = Number(req.params.userId);
    const barId = Number(req.params.barId);

    if (
      !userId ||
      !barId ||
      typeof userId !== "number" ||
      typeof barId !== "number"
    ) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
    }

    const affectedRows = await favouriteRepository.unfavouriteBar(
      userId,
      barId,
    );

    if (affectedRows <= 0) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Echec de la suppression" });
    } else {
      res.status(StatusCodes.NO_CONTENT).json({ affectedRows });
    }
  } catch (err) {
    next(err);
  }
};

export default { add, destroy };
