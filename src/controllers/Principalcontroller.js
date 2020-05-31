const principalcontroller = {};

principalcontroller.principal_controller = (req, res) => {
    
        res.render('index.html');
   
   
}

principalcontroller.mesagetocontact_controller = (req, res)=> {
        console.log(req.body);
        
}
module.exports = principalcontroller;