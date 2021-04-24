//require libraries

const express = require('express');
const port = 3000
//app setup 
const app = express();
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');


// //styles 
// app.use(express.static('public'));

//middleware 

const exphbs = require('express-handlebars');
// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');


// const router = require('./routes/index.js')
// app.use(router)


// app.get('/', (req, res) => {

//     res.render('home')

//   })

app.get('/posts/new', (req, res) => {

    res.render('posts-new')
  })

 

//controllers
require('./controllers/posts.js')(app);
require('./controllers/comments.js')(app);

// Set db
require('./data/reddit-db');




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

  module.exports = app;

