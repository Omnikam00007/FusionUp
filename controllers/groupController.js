const Group = require("../models/groupModel");

const groupHandler = async (req, res) => {
    const {
        groupName,
        leaderName,
        leaderEmail,
        leaderPhone,
        numMembers,
        projectDescription,
        skillSet
    } = req.body;
    const username = req.session.username
    const newGroupRegistration = new Group({
        username: username,
        groupName,
        leaderName,
        leaderEmail,
        leaderPhone,
        numMembers,
        projectDescription,
        skillSet, 
        isActive: false
    })

    await newGroupRegistration.save();
    return res.redirect("/groups");
};

module.exports = {
    groupHandler
}