import express from "express";
import groupActions from "./modules/groups/groupActions";
import participateActions from "./modules/participate/participateActions";

const router = express.Router();

router.get("/api/groups/:id", groupActions.read);

router.post("/api/participate", participateActions.add);

export default router;
