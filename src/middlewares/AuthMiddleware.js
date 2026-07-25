const { DecodeToken } = require("../utils/TokenHelper");

module.exports = (req, res, next) => {

    try {

        const token = req.headers.token;

        if (!token) {
            return res.status(401).json({
                status: "fail",
                message: "Unauthorized"
            });
        }

        const decoded = DecodeToken(token);

        if (!decoded) {
            return res.status(401).json({
                status: "fail",
                message: "Invalid Token"
            });
        }

        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            status: "fail",
            message: "Authentication Failed"
        });

    }

};