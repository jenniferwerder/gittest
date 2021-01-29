const express = require ('express');
const router = express.Router();

const user = require ('../Controllers/user.js')


//starting with user, already been declated in the index file
router.get("/", user.getUsers);
router.post("/", user.postUsers);
router.get("/:email", user.getIdUsers);
router.delete("/:id", user.deleteUsers);
router.patch("/:id", user.patchUsers);

 
module.exports = {
    router,

}
/*import express from 'express';
import * as user from '../Controllers/user.js';*/