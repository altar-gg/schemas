const mongoose = require("mongoose");

require("mongoose-schema-extend");
require("mongoose-valid8");

const User = {
    User: require("./user/User"),
    DetailedUser: require("./user/DetailedUser"),
    PublicUser: require("./user/PublicUser"),
}

module.exports =  {
    mongoose, 

    ...User
};