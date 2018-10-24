import express from 'express';

import {
  listAllInternships,
  createInternship,
  getInternshipById,
  updateInternship,
  deleteInternship,
} from '../controllers/internships';

const router = express.Router();

router.get('/', listAllInternships);
router.post('/', createInternship);
router.get('/:id', getInternshipById);
router.put('/:id', updateInternship);
router.delete('/:id', deleteInternship);

export default router;