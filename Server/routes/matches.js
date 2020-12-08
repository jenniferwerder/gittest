import express from 'express';

import * as match from '../Controllers/matches.js';
//import {getMatch, postMatch, getIdMatch, deleteMatch, patchMatch} from '../Controllers/matches.js';


const router = express.Router();

router.get("/", getMatch);
router.post("/", postMatch);
router.get("/:id", getIdMatch);
router.delete("/:id", deleteMatch);
//router.patch("/:id", patchMatch);



export default router;

