import { Router } from "express";
import * as tutorias from '../controllers/tutorial-controller.js'

const router = Router();

router.post("/", tutorias.create);

router.get("/", tutorias.findAll);

router.get('/published', tutorias.findAllPubished);

router.get('/:id', tutorias.findOne);

router.put("/:id", tutorias.update);

router.delete("/", tutorias.deleteAll);

router.delete("/:id", tutorias.deleteTutorial());

export default router;