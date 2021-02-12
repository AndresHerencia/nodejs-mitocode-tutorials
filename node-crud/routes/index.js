let express = require('express');
let router = express.Router();

let mongoose = require('./../config/conexion');
let Persona = require('./../models/persona');

/* GET home page. */
router.get('/', function(req, res, next) {
  Persona.find((error, personas) => {
    //console.log(personas);
    if(error) throw error;
    res.render('index', { personas: personas });
  }); 
});

router.get('/persona/nuevo', (req, resp, next) => {
  resp.render('personaForm', {});
});

router.get('/persona/modificar/:id', (req, resp, next) => {
  let idPersona = req.params.id;
  Persona.findOne({_id: idPersona }, (err, persona) => {
    if(err) throw err;
    resp.render('personaForm', { persona: persona });
  });
});

router.get('/persona/eliminar/:id', (req, resp, next) => {
  let idPersona = req.params.id;
  Persona.deleteOne({_id: idPersona }, (err) => {
    if(err) throw err;
    resp.redirect('/');
  });
});

module.exports = router;