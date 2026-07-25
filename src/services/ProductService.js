const BrandModel = require("../models/BrandModel");
const CategoryModel = require("../models/CategoryModel");
const ProductSliderModel = require("../models/ProductSliderModel");
const ProductModel = require("../models/ProductModel");
const ProductDetailsModel = require("../models/ProductDetailsModel");
const ReviewModel = require("../models/ReviewModel");

exports.ProductBrandList = async () => {
    return await BrandModel.find();
};

exports.ProductCategoryList = async () => {
    return await CategoryModel.find();
};

exports.ProductSliderList = async () => {
    return await ProductSliderModel.find().populate("productID");
};

exports.ProductListByBrand = async (BrandID) => {
    return await ProductModel.find({
        brandID: BrandID
    })
        .populate("brandID")
        .populate("categoryID");
};

exports.ProductListByCategory = async (CategoryID) => {
    return await ProductModel.find({
        categoryID: CategoryID
    })
        .populate("brandID")
        .populate("categoryID");
};

exports.ProductListBySmilier = async (CategoryID) => {
    return await ProductModel.find({
        categoryID: CategoryID
    }).limit(10);
};

exports.ProductListByKeyword = async (Keyword) => {

    return await ProductModel.find({
        $or: [
            {
                title: {
                    $regex: Keyword,
                    $options: "i"
                }
            },
            {
                shortDes: {
                    $regex: Keyword,
                    $options: "i"
                }
            }
        ]
    });

};

exports.ProductListByRemark = async (Remark) => {

    return await ProductModel.find({
        remark: Remark
    });

};

exports.ProductDetails = async (ProductID) => {

    return await ProductDetailsModel.findOne({
        productID: ProductID
    }).populate("productID");

};

exports.ProductReviewList = async (ProductID) => {

    return await ReviewModel.find({
        productID: ProductID
    }).populate("userID");

};