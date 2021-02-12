var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

let personas = [
  {
      id:1,
      nombre: "Carlos"
  },
  {
      id: 2,
      nombre: "Andres"
  },
  {
      id: 3,
      nombre: "Carlos Andres"
  }
]

router.get('/', (request, response) => {
  response.render('index', {titulo: 'pug', mensaje: 'AndresG | Pug', personas: personas});
});

module.exports = router;
