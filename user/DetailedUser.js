const mongoose = require("mongoose");
const {Schema} = mongoose;

const PublicUser = require("./PublicUser");
const Scheme = PublicUser.extend({

    email: {
        type: String,
        required: true,
        email: true,
        index: true,
        unique: true
    },

});

const model = mongoose.model("DetailedUser", Scheme);
module.exports = Scheme;    