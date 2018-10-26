import express from 'express';

import { 
    listAllEvents,
    createEvent,
    updateEvent,
    deleteEvent,
    getEventById
} from '../controllers/events';

const router = express.Router();

router.get("/", listAllEvents);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);
router.get("/:id", getEventById);

export default router;