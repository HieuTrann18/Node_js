const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const database = require('./config/database')

//Connect to database
database.connect();


const app = express();
const port = 3001;
const route = require('./routes');


app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);  
app.use(express.json());
// HTTP Logger
// app.use(morgan('combined'));
// Template Engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
