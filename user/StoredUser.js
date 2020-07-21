const mongoose = require("mongoose");
const {Schema} = mongoose;

const User = require("./User");

const schema = User.extend({
    password: {
        type: String,
        required: true
    }
});

const model = mongoose.model("StoredUser", schema);
module.exports = schema;