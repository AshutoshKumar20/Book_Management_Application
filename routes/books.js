const express = require("express");
const { users } = require("../data/users.json")
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

/* Getting all issued books
Route: /books/issued/books
Method: GET
Description: Get all issued books
Access: Public
Parameters: none
*/

router.get("/issued/books", (req, res) => {
    const userWithIssuedBooks = users.filter((each) => {
        if (each.issuedBook) return each;
    });

    const issuedBooks = [];

    userWithIssuedBooks.forEach((each) => {
        const book = books.find((book) => book.id === each.issuedBook);

        book.issuedBy = each.name;
        book.issuedDate = each.issuedDate;
        book.returnDate = each.returnDate;
        issuedBooks.push(book);
    })

    if (issuedBooks.length === 0)
        return res.status(404).json({
            success: false,
            message: "Book not found"
        })

    return res.status(200).json({
        success: true,
        data: issuedBooks
    })
});

/* Creating a new book
Route: /books
Method: POST
Description: Creating new book
Access: Public
Parameters: none
Data: author, name, genre, price, publication, id
*/

router.post("/books", (req, res) => {
    const { data } = req.body;

    if (!data) {
        return res.status(404).json({
            success: false,
            message: "Data Not Found"
        })
    }

    const book = books.find((each) => {
        if (!each.id) {
            return res.status(404).json({
                success: false,
                message: "Book Not Found"
            })
        }
        const newBook = { ...book, ...data };
        return res.status(200).json({
            success: true,
            data: newBook
        })
    })
});



module.exports = router;