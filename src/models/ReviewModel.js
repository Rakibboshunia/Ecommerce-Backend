const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
    {
        productID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "products"
        },
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        },
        des: String,
        rating: Number
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("reviews", ReviewSchema);