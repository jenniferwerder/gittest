const express = require ('express');
const router = express.Router();


const match = require ('../Controllers/matches.js')



router.get("/", match.getMatch);
router.post("/", match.postMatch);
router.get("/:id", match.getIdMatch);
router.delete("/:id", match.deleteMatch);
//router.patch("/:id", patchMatch);



module.exports = {
router,
}


//import * as match from '../Controllers/matches.js';
//import {getMatch, postMatch, getIdMatch, deleteMatch, patchMatch} from '../Controllers/matches.js';