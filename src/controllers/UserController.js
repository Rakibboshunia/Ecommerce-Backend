const UserService = require("../services/UserService");

exports.UserOTP = async (req, res) => {

    const result = await UserService.UserOTP(req.params.email);

    res.json(result);

};

exports.VerifyLogin = async (req, res) => {

    const result = await UserService.VerifyLogin(
        req.params.email,
        req.params.otp
    );

    res.json(result);

};

exports.UserLogout = async (req, res) => {

    res.json({
        status: "success",
        message: "Logout Successful"
    });

};