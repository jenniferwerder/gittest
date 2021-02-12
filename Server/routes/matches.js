const express = require ('express');
const router = express.Router();
const app = express();
const cors = require('cors');
const matches = require ('../Controllers/matches.js')


//starting with user, already been declated in the index file
router.get("/", matches.getAllMatches); 
router.post("/", matches.postMatch);
router.get("/:email", matches.getMatch);
router.delete("/:email",matches.deleteMatch);

 
module.exports = {  
    router,

}