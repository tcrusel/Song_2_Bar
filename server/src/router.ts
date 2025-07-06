import express from "express";
import authActions from "./modules/authActions";
import eventActions from "./modules/event/eventActions";
import groupActions from "./modules/groups/groupActions";
import participateActions from "./modules/participate/participateActions";
import userActions from "./modules/user/userActions";

const router = express.Router();

router.get("/event/:id", eventActions.read);

router.get("/api/groups/:id", groupActions.read);

router.post("/api/participate", participateActions.add);

router.post("/api/users", authActions.hashPassword, userActions.add);

router.post("/api/login", authActions.login);

export default router;
