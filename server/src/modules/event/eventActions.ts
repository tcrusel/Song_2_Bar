import { error } from "node:console";
import type { RequestHandler } from "express";
import participateRepository from "../participate/participateRepository";
import eventRepository from "./eventRepository";

const read: RequestHandler = async (req, res, next) => {
  try {
    const eventId = Number(req.params.id);
    const event = await eventRepository.find(eventId);
    if (!event) {
      res.status(404).json({ error: "Event not found" });
    } else {
      res.json(event);
    }
  } catch (err) {
    next(err);
  }
};

export default { read };
