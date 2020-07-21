const mongoose = require("mongoose");

//const Bitfield = require("bitfield");
const UserMeta = require("./UserMeta");
const {Schema} = mongoose;

const Scheme = new Schema({

    uuid: {
        type: String,
        required: true,
        uuid: true,
        index: true,
        unique: true
    },

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

    meta: {
        type: "bitfield",
        default: UserMeta.default(),
        flags: UserMeta
    }

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