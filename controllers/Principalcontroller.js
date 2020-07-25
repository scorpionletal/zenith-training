var nodemailer = require('nodemailer');

const principalcontroller = {};

principalcontroller.principal_controller = (req, res) => {
    
        res.render('index.html');
   
   
}

principalcontroller.mesagetocontact_controller = (req, res)=> {
        
                        
                var transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                        user: 'leone.vitrub.uni@gmail.com',
                        pass: 'vitrubman@leones123456789'
                }
                });
                
                // configura los datos del correo
                var mailOptions = {
                from: "MaestroPeru <leone.vitrub.uni@gmail.com>",
                to: 'aleri_55@hotmail.com',
                subject: 'Urgente!!! Cliente',
                text: 'Cotizacion',
                html: 'gracias'
                };
                
                // Envía el correo con el objeto de transporte definido anteriormente
                transporter.sendMail(mailOptions, function(error, info){
                if(error){
                        
                        res.redirect('/');
                        console.log(error);
                }
                //req.flash('Exito', 'Tu mensaje fue enviado , Gracias por confiar en MaestroPeru')
                res.redirect('/gracias.html');
               
                console.log('Mensaje enviado: ' + info.response);
                });
                        
}
module.exports = principalcontroller;