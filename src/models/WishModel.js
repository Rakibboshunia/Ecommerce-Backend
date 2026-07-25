const mongoose = require("mongoose");

const WishSchema = new mongoose.Schema(
    {
        productID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "products"
        },
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("wishes", WishSchema);