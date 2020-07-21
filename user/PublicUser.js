const mongoose = require("mongoose");

const Bitfield = require("bitfield");
const UserMeta = require("./UserMeta");
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

    meta: {
        type: Number,
        default: 0,

        get: function (value) {
            return new Bitfield(value, UserMeta);
        },

        set: function (value) {
            if (value instanceof Bitfield) return value.toJSON();
            return value;
        }
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