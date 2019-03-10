const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const Home = require('./routes/Todo');
const db = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(Home);

db.sync()
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
