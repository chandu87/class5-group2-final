import express from 'express';
import { checkIsLoggedInMiddleware } from "../controllers/auth";

import {
  listAllInternships,
  createInternship,
  getInternshipById,
  updateInternship,
  deleteInternship,
} from '../controllers/internships';

const router = express.Router();

router.get('/', listAllInternships);
router.post('/', checkIsLoggedInMiddleware, createInternship);
router.get('/:id', getInternshipById);
router.put('/:id', checkIsLoggedInMiddleware, updateInternship);
router.delete('/:id', checkIsLoggedInMiddleware, deleteInternship);

export default router;