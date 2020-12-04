import express from 'express';
import {getUser, postUser, getIdUser, deleteUserm getUser} from './'

const router = express.Router();

router.get("/", getUser);
router.post("/", postUser);
router.get("/:id", getIdUser);
router.delete("/:id", deleteUser);
router.patch("/:id", getUser);


export default router;

