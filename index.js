require("mongoose-valid8");
const mongoose = require("mongoose");
const extend = require("mongoose-schema-extend");

const User = {
    User: require("./user/User"),
    DetailedUser: require("./user/DetailedUser"),
    PublicUser: require("./user/PublicUser")
}

module.exports =  {
    mongoose, 

    ...User
};

//const schemas = require("@altar-gg/schemas");
