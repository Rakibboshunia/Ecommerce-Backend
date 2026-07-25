const ProfileService = require("../services/ProfileService");

exports.CreateProfile = async (req, res) => {

    const result = await ProfileService.CreateProfile(
        req.user.id,
        req.body
    );

    res.json({
        status: "success",
        data: result
    });

};

exports.UpdateProfile = async (req, res) => {

    const result = await ProfileService.UpdateProfile(
        req.user.id,
        req.body
    );

    res.json({
        status: "success",
        data: result
    });

};

exports.ReadProfile = async (req, res) => {

    const result = await ProfileService.ReadProfile(
        req.user.id
    );

    res.json({
        status: "success",
        data: result
    });

};