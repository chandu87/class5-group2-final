import express from 'express';
import { authenticatedRoute } from "../controllers/auth";

import {
  listAllMentors,
  createMentor,
  getMentorById,
  updateMentor,
  deleteMentor,
  searchMentor
} from '../controllers/mentors';

const router = express.Router();

router.get('/', listAllMentors);
router.post('/', authenticatedRoute, createMentor);
router.post('/', createMentor);
router.get('/search',searchMentor)
router.get('/:id', getMentorById);
router.put('/:id', authenticatedRoute, updateMentor);
router.delete('/:id', authenticatedRoute, deleteMentor);

export default router;