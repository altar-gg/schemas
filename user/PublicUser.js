const mongoose = require("mongoose");
const uuid = require('uuid');

const UserMeta = require("./UserMeta");
const {Schema} = mongoose;

const Scheme = new Schema({

    _id: {
        type: String,
        default: uuid.v4,
        required: true,
        uuid: true
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
    },

    toJSON: {
        getters: true,
        versionKey: false,
        transform: function (document, output, options) {

            delete output.email_unique;
            delete output.__t;
            delete output._id;

            return output;
        }
    }
});

Scheme.virtual('avatar').get(function () {
    return "https://cdn.altar.gg/avatars/" + this.id;
});

const model = mongoose.model("PublicUser", Scheme);
module.exports = Scheme;    