//require libraries

const express = require('express');
const port = 3000
//app setup 
const app = express();

// //styles 
// app.use(express.static('public'));

//middleware 
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

// const router = require('./routes/index.js')
// app.use(router)


app.get('/', (req, res) => {

    res.render('home')
  })


//   app.get('/', (req, res) => {
//     // set the url of the gif
//     const gifUrl = 'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245'
//     // render the hello-gif view, passing the gifUrl into the view to be displayed
//     res.render('hello-gif', { gifUrl })
//   })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })