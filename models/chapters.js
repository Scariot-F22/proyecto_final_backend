const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChaptersSchema = new Schema({
    title: { type: String, require: true, lowercase: true, unique: true },
    description: { type: String, require: true },
    video: { type: String, require: true },
    registerDate: { type: Date, default: Date.now() },
    animeId: { type: Schema.Types.ObjectId, ref: 'Animes' },
})

module.exports = mongoose.model('Chapters', ChaptersSchema)