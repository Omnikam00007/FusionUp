const mongoose = require('mongoose');

const groupRegistrationSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    groupName: {
        type: String,
        required: true,
        trim: true
    },
    leaderName: {
        type: String,
        required: true,
        trim: true
    },
    leaderEmail: {
        type: String,
        required: true,
        trim: true,
        match: /.+\@.+\..+/ // basic email validation pattern
    },
    leaderPhone: {
        type: String,
        trim: true
    },
    numMembers: {
        type: Number,
        required: true,
        min: 2,
        max: 5
    },
    projectDescription: {
        type: String,
        required: true,
        trim: true
    },
    skillSet: {
        type: String,
        required: true,
        trim: true
    },
    isActive: {
        type: Boolean,
    }
});

module.exports = mongoose.model('GroupRegistration', groupRegistrationSchema);
