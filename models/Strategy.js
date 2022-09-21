const mongoose = require('mongoose')

const strategySchema = new mongoose.Schema({
    title: { type: String},
    body: { type: String},
    gamertag: {type: String},
})

const Strategy = mongoose.model('Strategy', strategySchema)

module.exports = Strategy