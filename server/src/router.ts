import express from "express";
import eventActions from "./modules/event/eventActions";
import groupActions from "./modules/groups/groupActions";
import participateActions from "./modules/participate/participateActions";

const router = express.Router();

router.get("/api/events", eventActions.browse);
router.get("/api/events/:id", eventActions.read);

router.get("/api/groups/:id", groupActions.read);

router.post("/api/participate", participateActions.add);

export default router;
