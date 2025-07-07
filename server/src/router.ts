import express from "express";
import eventActions from "./modules/event/eventActions";
import groupActions from "./modules/groups/groupActions";
import participateActions from "./modules/participate/participateActions";

const router = express.Router();

router.get("/event/:id", eventActions.read);

router.get("/api/groups/:id", groupActions.read);

import userActions from "./modules/user/userActions";

router.post("/api/users", userActions.add);
router.post("/api/participate", participateActions.add);
router.delete("/api/participate/:userId/:eventId", participateActions.remove);

export default router;
