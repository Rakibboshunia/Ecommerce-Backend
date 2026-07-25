const express = require("express");
const router = express.Router();

// Controllers
const ProductController = require("../controllers/ProductController");
const UserController = require("../controllers/UserController");
const ProfileController = require("../controllers/ProfileController");
const WishController = require("../controllers/WishController");
const CartController = require("../controllers/CartController");

// Middleware
const AuthMiddleware = require("../middlewares/AuthMiddleware");

/*
|--------------------------------------------------------------------------
| Product Routes
|--------------------------------------------------------------------------
*/

router.get(
    "/ProductBrandList",
    ProductController.ProductBrandList
);

router.get(
    "/ProductCategoryList",
    ProductController.ProductCategoryList
);

router.get(
    "/ProductSliderList",
    ProductController.ProductSliderList
);

router.get(
    "/ProductListByBrand/:BrandID",
    ProductController.ProductListByBrand
);

router.get(
    "/ProductListByCategory/:CategoryID",
    ProductController.ProductListByCategory
);

router.get(
    "/ProductListBySmilier/:CategoryID",
    ProductController.ProductListBySmilier
);

router.get(
    "/ProductListByKeyword/:Keyword",
    ProductController.ProductListByKeyword
);

router.get(
    "/ProductListByRemark/:Remark",
    ProductController.ProductListByRemark
);

router.get(
    "/ProductDetails/:ProductID",
    ProductController.ProductDetails
);

router.get(
    "/ProductReviewList/:ProductID",
    ProductController.ProductReviewList
);

/*
|--------------------------------------------------------------------------
| User Routes
|--------------------------------------------------------------------------
*/

router.get(
    "/UserOTP/:email",
    UserController.UserOTP
);

router.get(
    "/VerifyLogin/:email/:otp",
    UserController.VerifyLogin
);

router.get(
    "/UserLogout",
    UserController.UserLogout
);

/*
|--------------------------------------------------------------------------
| Profile Routes
|--------------------------------------------------------------------------
*/

router.post(
    "/CreateProfile",
    AuthMiddleware,
    ProfileController.CreateProfile
);

router.post(
    "/UpdateProfile",
    AuthMiddleware,
    ProfileController.UpdateProfile
);

router.get(
    "/ReadProfile",
    AuthMiddleware,
    ProfileController.ReadProfile
);

/*
|--------------------------------------------------------------------------
| Wish Routes
|--------------------------------------------------------------------------
*/

router.post(
    "/SaveWishList",
    AuthMiddleware,
    WishController.SaveWishList
);

router.post(
    "/RemoveWishList",
    AuthMiddleware,
    WishController.RemoveWishList
);

router.get(
    "/WishList",
    AuthMiddleware,
    WishController.WishList
);

/*
|--------------------------------------------------------------------------
| Cart Routes
|--------------------------------------------------------------------------
*/

router.post(
    "/SaveCartList",
    AuthMiddleware,
    CartController.SaveCartList
);

router.post(
    "/RemoveCartList",
    AuthMiddleware,
    CartController.RemoveCartList
);

router.get(
    "/CartList",
    AuthMiddleware,
    CartController.CartList
);

module.exports = router;