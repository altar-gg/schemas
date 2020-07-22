const mongoose = require("mongoose");
const {Schema} = mongoose;

const DetailedUser = require("./DetailedUser");
const Scheme = DetailedUser.extend({

    ignore_reports: {
        type: Boolean,
        default: false
    },

    password: {
        type: String,
        required: true
    }

});

const model = mongoose.model("User", Scheme);
module.exports = Scheme;