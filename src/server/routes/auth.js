import express from 'express';

import {
  login
} from '../controllers/auth';

console.log({ login });

const router = express.Router();

router.post("/login", login);

export default router;