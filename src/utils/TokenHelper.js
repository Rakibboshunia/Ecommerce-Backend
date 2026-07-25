const jwt = require("jsonwebtoken");

exports.CreateToken = (data) => {
    return jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
};

exports.DecodeToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (e) {
        return null;
    }
};