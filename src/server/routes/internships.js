import express from 'express';
import { authenticatedRoute } from "../controllers/auth";

import {
  listAllInternships,
  createInternship,
  getInternshipById,
  updateInternship,
  deleteInternship,
  searchInternship  
} from '../controllers/internships';

const router = express.Router();

router.get('/', listAllInternships);
router.post('/', authenticatedRoute, createInternship);
router.get("/search", searchInternship);
router.get('/:id', getInternshipById);
router.put('/:id', authenticatedRoute, updateInternship);
router.delete('/:id', authenticatedRoute, deleteInternship);

export default router;