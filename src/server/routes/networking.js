import express from 'express';
import { authenticatedRoute } from "../controllers/auth";

import { 
    listAllNetworking,
    createNetwork,
    updateNetwork,
    deleteNetwork,
    getNetworkById
} from '../controllers/networking';

const router = express.Router();

router.get("/", listAllNetworking);
router.post("/", authenticatedRoute, createNetwork);
router.put("/:id", authenticatedRoute, updateNetwork);
router.delete("/:id", authenticatedRoute, deleteNetwork);
router.get("/:id", getNetworkById);

export default router;