var DB = require('../models/database');
var Database = new DB();

const preinscritoscontroller = {};

preinscritoscontroller.preinscritos_controller = (req, res) => {
    var nombre = req.body.nombre ;
    var apellido = req.body.apellido ;
    var correo = req.body.correo ;
    var telefono = req.body.telefono ;
    var curso = req.body.curso ;
       
    var valor = `('${nombre}','${apellido}','${correo}','${telefono}','${curso}')`;

    console.log(valor);

    Database.save_users_preinscritos(valor,1,function(data){

        console.log('********************');
        console.log(data);
        console.log('********************');

        res.render('/graciaspreinscrito.html');
    });
   
}


module.exports = preinscritoscontroller;