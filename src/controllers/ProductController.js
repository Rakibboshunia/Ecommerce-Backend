const ProductService = require("../services/ProductService");

exports.ProductBrandList = async (req, res) => {

    try {

        const data = await ProductService.ProductBrandList();

        res.status(200).json({
            status: "success",
            data: data
        });

    } catch (error) {

        res.status(500).json({
            status: "fail",
            message: error.message
        });

    }

};

exports.ProductCategoryList = async (req, res) => {

    try {

        const data = await ProductService.ProductCategoryList();

        res.status(200).json({
            status: "success",
            data
        });

    } catch (error) {

        res.status(500).json({
            status: "fail",
            message: error.message
        });

    }

};

exports.ProductSliderList = async (req, res) => {

    try {

        const data = await ProductService.ProductSliderList();

        res.status(200).json({
            status: "success",
            data
        });

    } catch (error) {

        res.status(500).json({
            status: "fail",
            message: error.message
        });

    }

};

exports.ProductListByBrand = async (req, res) => {

    try {

        const data = await ProductService.ProductListByBrand(req.params.BrandID);

        res.status(200).json({
            status: "success",
            data
        });

    } catch (error) {

        res.status(500).json({
            status: "fail",
            message: error.message
        });

    }

};

exports.ProductListByCategory = async (req, res) => {

    try {

        const data = await ProductService.ProductListByCategory(req.params.CategoryID);

        res.status(200).json({
            status: "success",
            data
        });

    } catch (error) {

        res.status(500).json({
            status: "fail",
            message: error.message
        });

    }

};

exports.ProductListBySmilier = async (req, res) => {

    try {

        const data = await ProductService.ProductListBySmilier(req.params.CategoryID);

        res.status(200).json({
            status: "success",
            data
        });

    } catch (error) {

        res.status(500).json({
            status: "fail",
            message: error.message
        });

    }

};

exports.ProductListByKeyword = async (req, res) => {

    try {

        const data = await ProductService.ProductListByKeyword(req.params.Keyword);

        res.status(200).json({
            status: "success",
            data
        });

    } catch (error) {

        res.status(500).json({
            status: "fail",
            message: error.message
        });

    }

};

exports.ProductListByRemark = async (req, res) => {

    try {

        const data = await ProductService.ProductListByRemark(req.params.Remark);

        res.status(200).json({
            status: "success",
            data
        });

    } catch (error) {

        res.status(500).json({
            status: "fail",
            message: error.message
        });

    }

};

exports.ProductDetails = async (req, res) => {

    try {

        const data = await ProductService.ProductDetails(req.params.ProductID);

        res.status(200).json({
            status: "success",
            data
        });

    } catch (error) {

        res.status(500).json({
            status: "fail",
            message: error.message
        });

    }

};

exports.ProductReviewList = async (req, res) => {

    try {

        const data = await ProductService.ProductReviewList(req.params.ProductID);

        res.status(200).json({
            status: "success",
            data
        });

    } catch (error) {

        res.status(500).json({
            status: "fail",
            message: error.message
        });

    }

};