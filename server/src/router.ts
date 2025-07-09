import express from "express";
import groupActions from "./modules/groups/groupActions";
import favouriteGroupActions from "./modules/favourite/favouriteGroupAction/favouriteGroupActions";

const router = express.Router();

router.get("/api/groups/:id", groupActions.read);

router.post("/api/favourite", favouriteGroupActions.add);

export default router;
