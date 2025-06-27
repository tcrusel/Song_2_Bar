import express from "express";

const router = express.Router();

import favouriteGroupActions from "./modules/favourite/fovouriteGroupAction/favouriteGroupActions";
router.post("/api/favourite_music_group", favouriteGroupActions.add);

export default router;
