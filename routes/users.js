const express = require("express");
const { users } = require("../data/users.json");

const router = express.Router();

/* For getting all users 
Route: /users
Method: GET
Description: Get all users
Access: Public
Parameters: none
*/

router.get("/", (req, res) => {
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

router.get("/:id", (req, res) => {
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

/* For creating a new user
Route: /users
Method: POST
Description: Create a new user
Access: Public
Parameters: none
*/

router.post("/", (req, res) => {
    let { id, name, surname, email, subscriptionType, subscriptionDate } = req.body;
    const user = users.find((each) => each.id === id);
    if (user) {
        res.status(404).json({
            success: false,
            message: "User Exists with this id"
        })
    }

    users.push({
        id,
        name,
        surname,
        email,
        subscriptionType,
        subscriptionDate
    })
    return res.status(201).json({
        success: true,
        data: users
    })
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { data } = req.body;

    const user = users.find((each) => each.id === id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }
    const updatedUser = users.map((each) => {
        if (each.id === id) {
            return {
                ...each,
                ...data
            };
        }
        return each;
    });

    return res.status(200).json({
        success: true,
        data: updatedUser
    })
});

/* For deleting a user by id
Route: /users/:id
Method: DELETE
Description: Delete a user by id
Access: Public
Parameters: /:id
*/

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find((each) => each.id === id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User with this id is not found"
        });
    }
    const index = users.indexOf(user);
    users.splice(index, 1);

    return res.status(202).json({
        success: true,
        data: users
    })
})

/* For user subscription details
Route: /books//subscription-details/:id
Method: GET
Description: Get all user subscription details
Access: Public
Parameters: id
*/

router.get("/subscription-details/:id", (req, res) => {
    const { id } = req.params;
    const { data } = req.body
})


module.exports = router;
