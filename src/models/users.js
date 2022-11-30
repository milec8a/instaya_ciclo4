const mongoose = require('mongoose');
const {Schema} = mongoose;

const taskSchema = new Schema({
    email:{type: String, required: true},
    ingreso :{type: String, required: true},
})

module.exports = mongoose.model('usuarios', taskSchema);

