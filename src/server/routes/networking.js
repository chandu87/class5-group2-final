import express from 'express';
import { checkIsLoggedInMiddleware } from "../controllers/auth";

import { 
    listAllNetworking,
    createNetwork,
    updateNetwork,
    deleteNetwork,
    getNetworkById
} from '../controllers/networking';

const router = express.Router();

router.get("/", listAllNetworking);
router.post("/", checkIsLoggedInMiddleware, createNetwork);
router.put("/:id", checkIsLoggedInMiddleware, updateNetwork);
router.delete("/:id", checkIsLoggedInMiddleware, deleteNetwork);
router.get("/:id", getNetworkById);

export default router;