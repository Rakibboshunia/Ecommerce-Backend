const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        },
        payable: Number,
        cus_details: Object,
        ship_details: Object,
        tran_id: String,
        val_id: String,
        payment_status: String,
        delivery_status: String,
        total: Number,
        vat: Number
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("invoices", InvoiceSchema);