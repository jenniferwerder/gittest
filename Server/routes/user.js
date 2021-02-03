const express = require ('express');
const router = express.Router();
const app = express();
//maybe take cors away (line 5)
const cors = require('cors');
const user = require ('../Controllers/user.js')


//starting with user, already been declated in the index file
router.get("/", user.getUsers); //This does this
router.post("/", user.postUsers);
router.get("/:email", user.getIdUsers);
router.delete("/:email", user.deleteUsers);
router.patch("/:email", user.patchUsers);

 
module.exports = {  //This does this
    router,

}
/*import express from 'express';
import * as user from '../Controllers/user.js';*/