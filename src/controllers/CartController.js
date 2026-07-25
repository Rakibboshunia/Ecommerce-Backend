const CartService = require("../services/CartService");

exports.SaveCartList = async (req, res) => {

    try {

        const result = await CartService.SaveCartList(
            req.user.id,
            req.body
        );

        res.json({
            status: "success",
            data: result
        });

    } catch (error) {

        res.status(500).json({
            status: "fail",
            message: error.message
        });

    }

};

exports.RemoveCartList = async (req, res) => {

    try {

        const result = await CartService.RemoveCartList(
            req.user.id,
            req.body.productID
        );

        res.json({
            status: "success",
            data: result
        });

    } catch (error) {

        res.status(500).json({
            status: "fail",
            message: error.message
        });

    }

};

exports.CartList = async (req, res) => {

    try {

        const result = await CartService.CartList(
            req.user.id
        );

        res.json({
            status: "success",
            data: result
        });

    } catch (error) {

        res.status(500).json({
            status: "fail",
            message: error.message
        });

    }

};