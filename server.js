const express = require('express')
const app = express();
const hbs = require('hbs');

require('./hbs/helpers')

const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

//Expres HBS  engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


//Helpers


app.get('/', (req, res) => {

  res.render('home', {
    nombre: 'Manuel',
    anio: new Date().getFullYear()
  })

});
app.get('/about', (req, res) => {

  res.render('about', {
    anio: new Date().getFullYear()
  })

});

app.listen(PORT, () => {

  console.log(`Example app listening on port port! ${PORT}`);
})

