const mongoose = require('mongoose');
const { Schema } = mongoose;

const tacheSchema = new Schema({
    id: {type: String, required: true, unique: true},
    tache: String,
    date:{type: Date, default: Date.now,  required: true},
}) 

const Tache = mongoose.model('Tache', tacheSchema);

module.exports = Tache;