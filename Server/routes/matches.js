import express from 'express';
import {getMatch, postMatch, getMatch, deleteMatch, patchMatch} from '../../Modul/match';


const router = express.Router();

router.get("/", getMatches);
router.post("/", postMatch);
router.get("/:id", getIdMatch);
router.delete("/:id", deleteMatch);
router.patch("/:id", patchMatch);



export default router;