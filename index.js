const express = require("express");
const { users } = require("./data/users.json");
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

/* For get a user by id
Route: /users/:id
Method: GET
Description: Get a single user by id
Access: Public
Parameters: id
*/

app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find((each) => each.id === id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User Not Found"
        });
    } else {
        return res.status(202).json({
            success: true,
            data: user
        });
    }
});

/* For get a user by id
Route: /users
Method: POST
Description: Create a new user
Access: Public
Parameters: none
*/

app.post("/users", (req, res) => {
    let { id, name, surname, email, subscriptionType, subscriptionDate } = req.body;

});

app.use((req, res) => {
    res.status(404).json({
        message: "This route does not exist",
    });
})

app.listen(port, (req, res) => {
    console.log(`Server is running at port${port}`);
});