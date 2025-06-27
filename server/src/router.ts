import express from "express";
import groupActions from "./modules/groups/groupActions";

const router = express.Router();

router.get("/api/groups/:id", groupActions.read);

export default router;
