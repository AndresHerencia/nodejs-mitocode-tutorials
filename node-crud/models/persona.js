let mongoose = require('mongoose');
let monSchema = mongoose.Schema;

let personaSchema = new monSchema({
    id: { type: String },
    nombre: { type: String },
    apellido: { type: String },
    mensaje: { type: String }
}, { versionKey: false });

let Persona = mongoose.model('Personas', personaSchema);

module.exports = Persona;