const mongoose= require('mongoose');

const PersonaSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: String,
});

module.exports = mongoose.model('Persona', PersonaSchema, 'form_personas');