const mongoose = require("mongoose");

const PaymentSettingSchema = new mongoose.Schema(
    {
        store_id: String,
        store_passwd: String,
        currency: String,
        success_url: String,
        fail_url: String,
        cancel_url: String,
        ipn_url: String,
        init_url: String
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("paymentsettings", PaymentSettingSchema);