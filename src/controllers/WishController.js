const WishService = require("../services/WishService");

exports.SaveWishList = async (req, res) => {

    try {

        const result = await WishService.SaveWishList(
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

exports.RemoveWishList = async (req, res) => {

    try {

        const result = await WishService.RemoveWishList(
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

exports.WishList = async (req, res) => {

    try {

        const result = await WishService.WishList(
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