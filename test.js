const mongoose = require("mongoose");
require("./");

const User = mongoose.model("User");
const Bitfield = require("bitfield");

let user = new User({
    username: "Ruby",
    email: "me@ruby.js.org",
    password: "password"
})

console.log(user);
console.log(user.meta)

user.meta = new Bitfield(8);