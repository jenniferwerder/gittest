import express from 'express';

import * as user from '../Controllers/user.js';

//controller 

const router = express.Router();


router.get("/", user.getUser);
router.post("/", user.postUser);
router.get("/:id", user.getIdUser);
router.delete("/:id", user.deleteUser);
router.patch("/:id", user.patchUser);


export default router;
 