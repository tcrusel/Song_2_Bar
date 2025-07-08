import express from "express";
import authActions from "./modules/authActions";
import eventActions from "./modules/event/eventActions";
import groupActions from "./modules/groups/groupActions";
import participateActions from "./modules/participate/participateActions";
import userActions from "./modules/user/userActions";

const router = express.Router();

router.get("/api/events", eventActions.browse);
router.get("/api/events/:id", eventActions.read);

router.get("/api/groups/:id", groupActions.read);

router.post("/api/users", authActions.hashPassword, userActions.add);

router.post("/api/login", authActions.login);

router.post("/api/participate", participateActions.add);
router.delete("/api/participate/:userId/:eventId", participateActions.remove);

export default router;
