const express = require("express");
const { books } = require("../data/books.json");

const router = express.Router();

/* For getting all books 
Route: /books
Method: GET
Description: Get all books
Access: Public
Parameters: none
*/

router.get("/", (req, res) => {
    res.status(202).json({
        success: true,
        data: books
    })
});

/* For get a book by id
Route: /books/:id
Method: GET
Description: Get a single book by id
Access: Public
Parameters: id
*/

router.get("/:id", (req, res) => {
    const { id } = req.params;

    const book = books.find((each => each.id === id));
    if (!book) {
        return res.status(404).json({
            success: false,
            message: "Book Not Found"
        })
    }

    return res.status(200).json({
        success: true,
        data: book
    })
})

module.exports = router;