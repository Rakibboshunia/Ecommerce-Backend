const mongoose = require("mongoose");

const ProductSliderSchema = new mongoose.Schema(
    {
        title: String,
        des: String,
        price: Number,
        img: String,
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

module.exports = mongoose.model("productsliders", ProductSliderSchema);