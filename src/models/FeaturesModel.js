const mongoose = require("mongoose");

const FeaturesSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        img: String
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("features", FeaturesSchema);