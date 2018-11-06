import express from 'express';
import { checkIsLoggedInMiddleware } from "../controllers/auth";

import {
  listAllMentors,
  createMentor,
  getMentorById,
  updateMentor,
  deleteMentor,
} from '../controllers/mentors';

const router = express.Router();

router.get('/', listAllMentors);
router.post('/', checkIsLoggedInMiddleware, createMentor);
router.get('/:id', getMentorById);
router.put('/:id', checkIsLoggedInMiddleware, updateMentor);
router.delete('/:id', checkIsLoggedInMiddleware, deleteMentor);

export default router;