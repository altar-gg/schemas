require("mongoose-valid8");
const mongoose = require("mongoose");

const User = {
    StoredUser: require("./user/StoredUser"),
    User: require("./user/User")
}


const Schemas = {
    mongoose, 

    ...User
};

module.exports = Schemas;

//const schemas = require("@altar-gg/schemas");
