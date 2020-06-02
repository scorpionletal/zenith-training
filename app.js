var express =require('./controllers/app').express;
var app = require('./controllers/app').app;
var server = require('./controllers/app').server;

var flash = require('connect-flash');


var path = require('path');

//require('dotenv').config();

const bodyParser = require('body-parser');

//Middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(flash());

app.set('port', process.env.PORT || 8080);
//app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
//app.use(expressLayouts);
//Routes
app.use(express.static(path.join(__dirname,'public')));
//routes
app.use(require('./routes/mainroute'));

//static files

//starting the server

server.listen(app.get('port'),()=>{
    console.log('servidor corriendo por el puerto:'+app.get('port'));
});
