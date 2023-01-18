const mongoose = require('mongoose')

const Schema = mongoose.Schema

const clientSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    insuranceCompany: {
        type: String,
        required: true
    },
    policyNum: {
        type: String,
        required: true
    }

},{timestamps: true})

module.exports = mongoose.model('Client',clientSchema)