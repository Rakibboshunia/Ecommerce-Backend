const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: String,
        shortDes: String,
        price: Number,
        discount: Boolean,
        discountPrice: Number,
        image: String,
        star: Number,
        stock: Number,
        remark: String,
        categoryID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "categories"
        },
        brandID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "brands"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("products", ProductSchema);