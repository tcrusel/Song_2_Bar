import express from "express";
import eventActions from "./modules/event/eventActions";
import groupActions from "./modules/groups/groupActions";

const router = express.Router();

router.get("/api/events", eventActions.browse);
router.get("/api/events/:id", eventActions.read);
router.post("/api/events", eventActions.add);
router.get("/api/groups/:id", groupActions.read);

export default router;
