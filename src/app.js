const express= require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const cons= require('consolidate');

const http= require ('http');

app.use(express.json({limit:'25mb'}));

//inicializaciones
const server = http.createServer(app);


//settings
app.set('port', process.env.PORT || 3000);
app.engine('html',cons.swig);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');

//routes
app.use(require('./routes/index'));

// middlewares
app.use(morgan('dev'));


//static files
app.use(express.static(path.join(__dirname,'public')));

// listening the Server
//app
server.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});