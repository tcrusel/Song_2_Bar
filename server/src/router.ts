import express from "express";
import eventActions from "./modules/event/eventActions";

const router = express.Router();

router.get("/event/:id", eventActions.read);
export default router;
