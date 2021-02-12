const express = require ('express');
const router = express.Router();


const match = require ('../Controllers/interests.js')


//decides the direction
router.get("/", match.getMatch);
router.post("/", match.postMatch);
router.get("/:id", match.getIdMatch);

module.exports = {
    router,
}