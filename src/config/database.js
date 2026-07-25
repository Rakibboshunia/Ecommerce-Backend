const mongoose = require("mongoose");

const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = databaseConnection;