import type { RequestHandler } from "express";
import eventRepository from "./eventRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const events = await eventRepository.readAll();

    res.json(events);
  } catch (err) {
    console.error("Erreur lors de la récupération des événements :", err);
    next(err);
  }
};

export default { browse };
