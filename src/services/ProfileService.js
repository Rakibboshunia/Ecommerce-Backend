const ProfileModel = require("../models/ProfileModel");

exports.CreateProfile = async (userID, body) => {

    return await ProfileModel.create({
        userID,
        ...body
    });

};

exports.UpdateProfile = async (userID, body) => {

    return await ProfileModel.updateOne(
        { userID },
        body
    );

};

exports.ReadProfile = async (userID) => {

    return await ProfileModel.findOne({
        userID
    });

};