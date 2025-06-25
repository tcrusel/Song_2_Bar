import type { RequestHandler } from "express";
import eventRepository from "./eventRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const events = await eventRepository.readAllWithBarName();

    res.json(events);
  } catch (err) {
    next(err);
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
    next(err);
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
    next(err);
  }
};

export default { browse, read, add };
