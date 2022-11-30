const mongoose = require('mongoose');
const {Schema} = mongoose;

const taskSchema = new Schema({
    remitente:{type: String, required: true},
    id_remitente :{type: String, required: true},
    direccion_recogida :{type: String, required: true},
    ciudad_recogida:{type: String, required: true},
    fecha_recogida :{type: String, required: true},
    hora_recogida :{type: String, required: true},
    destinatario:{type: String, required: true},
    id_destinatario:{type: String, required: true},
    ciudad_destino:{type: String, required: true},
    direccion_destino:{type: String, required: true},
    alto_paq:{type: String, required: true},
    ancho_paq:{type: String, required: true},
    largo_paq :{type: String, required: true},
    peso_paq:{type: String, required: true},
})

module.exports = mongoose.model('ordenes', taskSchema);

