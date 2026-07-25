const mongoose = require("mongoose");

const ProductDetailsSchema = new mongoose.Schema(
    {
        img1: String,
        img2: String,
        img3: String,
        img4: String,
        des: String,
        color: String,
        size: String,
        productID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "products"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("productdetails", ProductDetailsSchema);