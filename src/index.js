const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const handlebars = require('express-handlebars');
const port = 3000;
//http logger
app.use(morgan('combined'));
//template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
//router
app.get('/', (req, res) => {
 res.render('home');
});
app.get('/news', (req, res) => {
    res.render('news'); 
   });
//127.0.0.1 localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})