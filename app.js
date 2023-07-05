const express = require('express');
require('./models/db');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();

const Route = require('./routes/anime');
const port = 3001;
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/anime', Route);

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/' }));
app.set('view engine', 'hbs');

app.listen(port, () => {
    console.log(`server Running on port ${port}`);
});