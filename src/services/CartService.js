const CartModel = require("../models/CartModel");

exports.SaveCartList = async (userID, body) => {

    return await CartModel.updateOne(
        {
            userID,
            productID: body.productID
        },
        {
            userID,
            productID: body.productID,
            color: body.color,
            size: body.size,
            qty: body.qty,
            price: body.price
        },
        {
            upsert: true
        }
    );

};

exports.RemoveCartList = async (userID, productID) => {

    return await CartModel.deleteOne({
        userID,
        productID
    });

};

exports.CartList = async (userID) => {

    return await CartModel.find({
        userID
    }).populate("productID");

};