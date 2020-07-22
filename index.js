const mongoose = require("mongoose");

require("mongoose-schema-extend");
require("mongoose-valid8");

require("./SchemaBitfield");

const User = {
    User: require("./user/User"),
    DetailedUser: require("./user/DetailedUser"),
    PublicUser: require("./user/PublicUser"),
    UserMeta: require("./user/UserMeta")
}

module.exports =  {
    mongoose, 

    ...User
};

//const schemas = require("@altar-gg/schemas");
