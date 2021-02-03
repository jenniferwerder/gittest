const express = require ('express');
const router = express.Router();


const match = require ('../Controllers/interests.js')



router.get("/", match.getMatch);
router.post("/", match.postMatch);
router.get("/:id", match.getIdMatch);

module.exports = {
    router,
}