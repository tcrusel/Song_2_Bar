import express from "express";
import authActions from "./modules/authActions";
import barActions from "./modules/bar/barActions";
import eventActions from "./modules/event/eventActions";
import favouriteActions from "./modules/favourite/favouriteActions";
import groupActions from "./modules/groups/groupActions";
import participateActions from "./modules/participate/participateActions";
import userActions from "./modules/user/userActions";

const router = express.Router();

router.get("/api/events", eventActions.browse);
router.get("/api/events/:id", eventActions.read);

router.get("/api/groups/:id", groupActions.read);

router.get("/api/bars/:id", barActions.read);
router.get("/api/participate", participateActions.browse);
router.get("/api/users/:id", userActions.read);
router.get(
  "/api/users/:userId/favourite_groups",
  favouriteActions.getFavouriteGroups,
);

router.post("/api/users", authActions.hashPassword, userActions.add);

router.post("/api/login", authActions.login);

router.use(authActions.verifyToken);

router.post("/api/participate", participateActions.add);
router.delete("/api/participate/:userId/:eventId", participateActions.remove);

router.post("/api/favourite_bar", favouriteActions.addFavouriteBar);
router.delete(
  "/api/favourite_bar/:userId/:barId",
  favouriteActions.destroyFavouriteBar,
);

router.post("/api/favourite_event", favouriteActions.addFavouriteEvent);
router.delete(
  "/api/favourite_event/:eventId",
  favouriteActions.destroyFavouriteEvent,
);

router.post(
  "/api/favourite_music_group",
  favouriteActions.addFavouriteMusicGroup,
);
router.delete(
  "/api/favourite_music_group/:userId/:musicGroupId",
  favouriteActions.destroyFavouriteMusicGroup,
);

export default router;
