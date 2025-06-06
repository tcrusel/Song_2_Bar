import type { RequestHandler } from "express";

import groupRepository from "./groupRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const groups = await groupRepository.readAll();

    res.json(groups);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const groupId = Number(req.params.id);
    const group = await groupRepository.read(groupId);

    if (group == null) {
      res.sendStatus(404);
    } else {
      res.json(group);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read };
