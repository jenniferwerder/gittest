import express from 'express';
import {getMatch, postMatch, getIdMatch, deleteMatch, patchMatch} from '../../Modul/match.js';


const router = express.Router();

router.get("/", getMatch);
router.post("/", postMatch);
router.get("/:id", getIdMatch);
router.delete("/:id", deleteMatch);
router.patch("/:id", patchMatch);



export default router;

