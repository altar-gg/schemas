const mongoose = require("mongoose");
const extend = require("mongoose-schema-extend");

const {Schema} = mongoose;

const schema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 24,
        lowercase: true,
        alphanumeric: true,
        trim: true
    }
});

const model = mongoose.model("User", schema);
module.exports = schema;