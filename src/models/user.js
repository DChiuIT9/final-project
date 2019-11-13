const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true},
    password: {
        type: String,
        required: true,
        validate: [function (input) {
            return input.length >= 6
        },
            "Password needs to be at least 6 characters"]
    }
});



const User = mongoose.model("User", userSchema);
module.exports = User;