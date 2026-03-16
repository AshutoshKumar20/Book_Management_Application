const express = require("express");
const { books } = require("../data/books.json");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(202).json({
        success: true,
        data: books
    })
})

module.exports = router;