const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const app = express();

var port = process.env.PORT || 8080;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burger_controller.js');
app.use('/', routes);
app.listen(port);
