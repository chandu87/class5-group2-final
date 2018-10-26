import express from 'express';

import { 
    listAllNetworking,
    createNetwork,
    updateNetwork,
    deleteNetwork,
    getNetworkById
} from '../controllers/networking';

const router = express.Router();

router.get("/", listAllNetworking);
router.post("/", createNetwork);
router.put("/:id", updateNetwork);
router.delete("/:id", deleteNetwork);
router.get("/:id", getNetworkById);

export default router;