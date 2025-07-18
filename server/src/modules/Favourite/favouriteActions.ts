import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import favouriteRepository from "./favouriteRepository";

const addFavouriteBar: RequestHandler = async (req, res, next) => {
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

const destroyFavouriteBar: RequestHandler = async (req, res, next) => {
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

const addFavouriteEvent: RequestHandler = async (req, res, next) => {
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

    const newFavouriteEvent = {
      userId: Number.parseInt(req.auth.sub),
      eventId: req.body.eventId,
    };

    const affectedRows =
      await favouriteRepository.favouriteEvent(newFavouriteEvent);

    if (affectedRows <= 0) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "La favorisation de l'évènement a échoué" });
    } else {
      res.status(StatusCodes.CREATED).json({ affectedRows });
    }
  } catch (err) {
    next(err);
  }
};

const destroyFavouriteEvent: RequestHandler = async (req, res, next) => {
  if (!req.auth.role) {
    res.sendStatus(StatusCodes.FORBIDDEN);
    return;
  }

  try {
    const userId = Number(req.params.userId);
    const eventId = Number(req.params.eventId);

    if (
      !userId ||
      !eventId ||
      typeof userId !== "number" ||
      typeof eventId !== "number"
    ) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
    }

    const affectedRows = await favouriteRepository.unfavouriteEvent(
      userId,
      eventId,
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

const getFavouriteGroups: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number(req.params.userId);

    if (!userId || typeof userId !== "number") {
      res.sendStatus(StatusCodes.BAD_REQUEST);
      return;
    }

    const favouriteGroups =
      await favouriteRepository.getFavouriteGroups(userId);

    res.status(StatusCodes.OK).json(favouriteGroups);
  } catch (err) {
    next(err);
  }
};

const addFavouriteGroup: RequestHandler = async (req, res, next) => {
  if (!req.auth.role) {
    res.sendStatus(StatusCodes.FORBIDDEN);
    return;
  }

  try {
    if (
      !req.body.userId ||
      !req.body.groupId ||
      typeof req.body.userId !== "number" ||
      typeof req.body.groupId !== "number"
    ) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
    }

    const userId = Number.parseInt(req.auth.sub);
    const groupId = req.body.groupId;

    const affectedRows = await favouriteRepository.favouriteGroup(
      userId,
      groupId,
    );

    if (affectedRows <= 0) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "La favorisation du groupe a échoué" });
    } else {
      res.status(StatusCodes.CREATED).json({ affectedRows });
    }
  } catch (err) {
    next(err);
  }
};

const destroyFavouriteGroup: RequestHandler = async (req, res, next) => {
  if (!req.auth.role) {
    res.sendStatus(StatusCodes.FORBIDDEN);
    return;
  }

  try {
    const userId = Number(req.params.userId);
    const groupId = Number(req.params.groupId);

    if (
      !userId ||
      !groupId ||
      typeof userId !== "number" ||
      typeof groupId !== "number"
    ) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
    }

    const affectedRows = await favouriteRepository.unfavouriteGroup(
      userId,
      groupId,
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

export default {
  addFavouriteBar,
  destroyFavouriteBar,
  addFavouriteEvent,
  destroyFavouriteEvent,
  getFavouriteGroups,
  addFavouriteGroup,
  destroyFavouriteGroup,
};
