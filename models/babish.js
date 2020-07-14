const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const babishSchema = new mongoose.Schema({
    receipeName: {
        type: String,
        required: true,
        unique: true,
    },
    videoURL: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    directions: {
        type: String,
        required: true,
    },
    cleanPlate: {
        type: Boolean,
        default: true,
    },
})

const Babish = mongoose.model("Babish", babishSchema)

module.exports = Babish;