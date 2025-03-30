const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3001;


app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
// app.use(morgan('combined'));
// Template Engine
app.engine('hbs', engine({
  extname: '.hbs'
}))

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources\\views'));

app.get('/', (req, res) => {
   res.render('home')
   console.log(__dirname)
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.get('/search', (req, res) => {

  res.render('search')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

