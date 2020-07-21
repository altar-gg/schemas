require("mongoose-valid8");
const mongoose = require("mongoose");
const extend = require("mongoose-schema-extend");

const Bitfield = require("./Bitfield")

const User = {
    User: require("./user/User"),
    DetailedUser: require("./user/DetailedUser"),
    PublicUser: require("./user/PublicUser"),
    UserMeta: require("./user/UserMeta")
}

module.exports =  {
    mongoose, 

    Bitfield,

    ...User
};

//const schemas = require("@altar-gg/schemas");
