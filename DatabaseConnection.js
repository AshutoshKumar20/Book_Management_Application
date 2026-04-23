const mongoose = require("mongoose");

function DbConnection() {
    const DB_URL = process.env.MONGO_URI;

    mongoose.connect(DB_URL);

    const Db = mongoose.connection;

    Db.on("error", console.error.bind(console, "Connection Error: "));
    Db.once("open", function () {
        console.log("Db Connected");
    });
};

module.exports = DbConnection;