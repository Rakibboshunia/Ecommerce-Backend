const WishModel = require("../models/WishModel");

exports.SaveWishList = async (userID, productID) => {

    return await WishModel.updateOne(
        {
            userID,
            productID
        },
        {
            userID,
            productID
        },
        {
            upsert: true
        }
    );

};

exports.RemoveWishList = async (userID, productID) => {

    return await WishModel.deleteOne({
        userID,
        productID
    });

};

exports.WishList = async (userID) => {

    return await WishModel.find({
        userID
    }).populate("productID");

};