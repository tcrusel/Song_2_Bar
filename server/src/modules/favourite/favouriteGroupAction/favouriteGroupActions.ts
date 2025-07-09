import type { RequestHandler } from "express";
import favouriteGroupRepository from "./favouriteGroupRepository";
import { id_ID } from "@faker-js/faker/.";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newFavouriteGroup = {
      user_id: req.body.user_id,
      music_group_id: req.body.music_group_id,
    };
    const success = await favouriteGroupRepository.create(newFavouriteGroup);
    res.status(201).json({ success });
  } catch (err) {
    next(err);
  }
};

export default { add };
