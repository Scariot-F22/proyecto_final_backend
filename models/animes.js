const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimesSchema = new Schema({
    title: { type: String, require: true, lowercase: true, unique: true },
    description: { type: String, require: true },
    image: { type:URL, require: true },
    category: { type: String, require: true },
    registerDate: { type: Date, default: Date.now() },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    chapters: [{ type: Schema.Types.ObjectId, ref: 'Chapters' }] //RELACIÓN ONE TO MANY
})

module.exports = mongoose.model('Animes', AnimesSchema)