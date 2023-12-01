const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');


const { database } = require('./keys')

//inicialización

const app = express();

//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayouts: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(session({
    secret: 'moviesplus',
    resave: false,
    saveUninitialized: false
}))
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Variables Globales
app.use((req,res, next) => {
    next();
})
//routes
app.use('/inicio', require('./routes/index'));
app.use('/login', require('./routes/login'));
app.use('/movies', require('./routes/links'));
app.use('/novedades', require('./routes/novedades'));
app.use('/nosotros', require('./routes/nosotros'));

//Public
app.use(express.static(path.join(__dirname, 'public')));

//starting Server

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})