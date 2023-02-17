const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    green: { type: Boolean, required: true },
    description: { type: String, required: true }
})

module.exports = mongoose.model('Product', productSchema)