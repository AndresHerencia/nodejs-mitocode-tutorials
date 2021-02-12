let express = require('express');
let router = express.Router();

let mongoose = require('./../config/conexion');
let Persona = require('./../models/persona');


router.post('/persona/operar', function(req, res, next) {
  
  if(req.body._id === "") {
    console.log("idVacio");
    let per = new Persona({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      mensaje: req.body.mensaje,
    });
    console.log(per);
    per.save();
  } else {
    console.log("idNoVacio");
    console.log(req.body);
    Persona.findByIdAndUpdate(req.body._id, {$set: req.body}, {new: true}, (err, model) => {
      if(err) throw err;
    });
  }

  res.redirect('/');

});

module.exports = router;