import express from "express";
import eventActions from "./modules/event/eventActions";

const router = express.Router();

router.get("/event/:id", eventActions.read);
import groupActions from "./modules/groups/groupActions";

router.get("/api/groups/:id", groupActions.read);

import userActions from "./modules/user/userActions";

router.post("/api/users", userActions.add);

export default router;
