import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import favouriteRepository from "./favouriteRepository";

const add: RequestHandler = async (req, res, next) => {
  if (!req.auth.role) {
    res.sendStatus(StatusCodes.FORBIDDEN);
    return;
  }

  try {
    console.log(req.body.userId);
    console.log(req.body.barId);

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

    const affectedRows = await favouriteRepository.create(newFavouriteBar);

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

export default { add };
