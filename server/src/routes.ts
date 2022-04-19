import { Router } from "express";
import AuthController from "./controllers/AuthController";
import authMiddleware from "./middlewares/authMiddleware";

const router = Router();

router.post("/auth", AuthController.authenticate);

export default router;
