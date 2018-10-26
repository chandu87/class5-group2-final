import express from 'express';

import {
  listAllMentors,
  createMentor,
  getMentorById,
  updateMentor,
  deleteMentor,
} from '../controllers/mentors';

const router = express.Router();

router.get('/', listAllMentors);
router.post('/', createMentor);
router.get('/:id', getMentorById);
router.put('/:id', updateMentor);
router.delete('/:id', deleteMentor);

export default router;