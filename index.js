const express = require("express");
const { users } = require("./data/users.json")
const app = express();

const port = 8081;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is up and running",
    });
});

/* For getting all users 
Route: /users
Method: GET
Description: Get all users
Access: Public
Parameters: none
*/

app.get("/users", (req, res) => {
    res.status(202).json({
        success: true,
        data: users
    });
});

app.use((req, res) => {
    res.status(404).json({
        message: "This route does not exist",
    });
})

app.listen(port, (req, res) => {
    console.log(`Server is running at port${port}`);
});