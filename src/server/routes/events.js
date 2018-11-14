import express from 'express';
import { authenticatedRoute } from "../controllers/auth";

import { 
  listAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventById,
  searchEvent
} from '../controllers/events';

const router = express.Router();

router.get("/", listAllEvents);
router.post("/", authenticatedRoute, createEvent);
router.put("/:id", authenticatedRoute, updateEvent);
router.delete("/:id", authenticatedRoute, deleteEvent);
router.get("/search",searchEvent);
router.get("/:id", getEventById);

export default router;
