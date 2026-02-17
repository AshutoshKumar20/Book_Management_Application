const express = require("express");
const app = express();

const port = 8081;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is up and running",
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