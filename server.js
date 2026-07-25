require("dotenv").config();

const app = require("./app");
const databaseConnection = require("./src/config/database");

databaseConnection();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});