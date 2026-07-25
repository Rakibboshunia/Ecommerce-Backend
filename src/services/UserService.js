const UserModel = require("../models/UserModel");
const { CreateToken } = require("../utils/TokenHelper");

exports.UserOTP = async (email) => {

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await UserModel.updateOne(
        { email },
        { email, otp },
        { upsert: true }
    );

    // এখানে Email পাঠানোর কোড থাকবে (Nodemailer)

    return {
        status: "success",
        message: "OTP Sent",
        otp
    };
};

exports.VerifyLogin = async (email, otp) => {

    const user = await UserModel.findOne({
        email,
        otp
    });

    if (!user) {
        return {
            status: "fail",
            message: "Invalid OTP"
        };
    }

    await UserModel.updateOne(
        { email },
        { otp: "0" }
    );

    const token = CreateToken({
        id: user._id,
        email: user.email
    });

    return {
        status: "success",
        token
    };
};