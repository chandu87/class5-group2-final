import express from 'express';
import { checkIsLoggedInMiddleware } from "../controllers/auth";

import { 
  listAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventById
} from '../controllers/events';

const router = express.Router();

router.get("/", listAllEvents);
router.post("/", checkIsLoggedInMiddleware, createEvent);
router.put("/:id", checkIsLoggedInMiddleware, updateEvent);
router.delete("/:id", checkIsLoggedInMiddleware, deleteEvent);
router.get("/:id", getEventById);

export default router;
