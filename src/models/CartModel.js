const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        productID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "products",
            required: true
        },
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true
        },
        color: String,
        price: Number,
        qty: Number,
        size: String
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("carts", CartSchema);