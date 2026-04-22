const express = require("express");
const dotenv = require("dotenv");
const DbConnection = require("./DatabaseConnection")

const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");

dotenv.config();

const app = express();

DbConnection();

const port = 8081;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is up and running",
    });
});

app.use("/users", userRouter);
app.use("/books", bookRouter);

app.use((req, res) => {
    res.status(404).json({
        message: "This route does not exist",
    });
})

app.listen(port, (req, res) => {
    console.log(`Server is running at port${port}`);
});