const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const sponsorSchema = new Schema({
    name: String,
    diocese: String,
    governorate: []
})

const sponsorModel = model('sponsor', sponsorSchema);

module.exports = sponsorModel;