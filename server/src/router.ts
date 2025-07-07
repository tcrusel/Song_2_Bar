import express from "express";
import eventActions from "./modules/event/eventActions";
import groupActions from "./modules/groups/groupActions";

const router = express.Router();

router.get("/api/events", eventActions.browse);
router.get("/api/groups/:id", groupActions.read);

export default router;
