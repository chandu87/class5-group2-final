import express from 'express';
import { authenticatedRoute } from "../controllers/auth";

import {
  listAllMentors,
  createMentor,
  getMentorById,
  updateMentor,
  deleteMentor,
} from '../controllers/mentors';

const router = express.Router();

router.get('/', listAllMentors);
router.post('/', authenticatedRoute, createMentor);
router.get('/:id', getMentorById);
router.put('/:id', authenticatedRoute, updateMentor);
router.delete('/:id', authenticatedRoute, deleteMentor);

export default router;