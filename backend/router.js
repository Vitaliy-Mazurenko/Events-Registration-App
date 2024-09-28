import Router from 'express';
import Controller from "./eventController.js";
const router = new Router();


router.get("/api", Controller.getAllEvents);
router.patch("/registration/:eventId", Controller.registration);


export default router;
