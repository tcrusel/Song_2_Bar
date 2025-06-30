import type { RequestHandler } from "express";
import eventRepository from "./eventRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const events = await eventRepository.readAll();

    res.json(events);
  } catch (err) {
    console.error("Erreur lors de la récupération des événements :", err);
    next({
      status: 500,
      message: "Impossible de récupérer les événements.",
    });
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const eventId = Number(req.params.id);
    const event = await eventRepository.read(eventId);

    if (event == null) {
      res.sendStatus(404);
    } else {
      res.json(event);
    }
  } catch (err) {
    console.error(
      `Erreur lors de la récupération de l'événement ${req.params.id} :`,
      err,
    );
    next({
      status: 500,
      message: "Impossible de récupérer l'événement.",
    });
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newEvent = {
      title: req.body.title,
      date: req.body.date,
      start_at: req.body.start_at,
      end_at: req.body.end_at,
      image: req.body.image,
      description: req.body.description,
      creator_id: req.body.creator_id,
      bar_id: req.body.bar_id,
      music_group_id: req.body.music_group_id,
    };

    const insertId = await eventRepository.create(newEvent);

    res.status(201).json({ insertId });
  } catch (err) {
    console.error("Erreur lors de la création d'un événement :", err);
    next({
      status: 500,
      message: "Impossible de créer l'événement.",
    });
  }
};

export default { browse, read, add };
