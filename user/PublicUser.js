const mongoose = require("mongoose");
const {Schema} = mongoose;

const Scheme = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 24,
        lowercase: true,
        alphanumeric: true,
        trim: true,
        index: true,
        unique: true
    },

}, {
    timestamps: {
        createdAt: "created",
        updatedAt: "updated",

        currentTime: () => {
            return Date.now();
        }
    }
});

const model = mongoose.model("PublicUser", Scheme);
module.exports = Scheme;    