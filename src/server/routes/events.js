import express from 'express';
import { authenticatedRoute } from "../controllers/auth";

import { 
  listAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventById
} from '../controllers/events';

const router = express.Router();

router.get("/", listAllEvents);
router.post("/", authenticatedRoute, createEvent);
router.put("/:id", authenticatedRoute, updateEvent);
router.delete("/:id", authenticatedRoute, deleteEvent);
router.get("/:id", getEventById);

export default router;
