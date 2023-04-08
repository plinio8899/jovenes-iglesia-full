import { Router } from "express";
import {
  postHpoints,
  getHpoints,
  postMpoints,
  getMpoints,
} from "../controllers/points.controller.js";

const router = Router();



router.post("/h-points", postHpoints);

router.get("/h-points", getHpoints);

router.post("/m-points", postMpoints);

router.get("/m-points", getMpoints);

export default router;
