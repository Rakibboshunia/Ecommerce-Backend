const mongoose = require("mongoose");

const InvoiceProductSchema = new mongoose.Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        },
        productID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "products"
        },
        invoiceID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "invoices"
        },
        qty: Number,
        price: Number,
        color: String,
        size: String
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("invoiceproducts", InvoiceProductSchema);