import express from "express";
import favouriteGroupActions from "./modules/favourite/favouriteGroupAction/favouriteGroupActions";
import groupActions from "./modules/groups/groupActions";

const router = express.Router();

router.get("/api/groups/:id", groupActions.read);

router.post("/api/favourite", favouriteGroupActions.add);

export default router;
