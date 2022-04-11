const express = require('express')
const morgan = require('morgan')
const hbs  = require('express-handlebars');
const path = require('path')


const app = express()
const port = 3001

app.use(express.static( path.join(__dirname, 'public')))

// Template engine
app.engine('hbs', hbs.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// HTTP logger
app.use(morgan('combined'))


app.get('/', (req, res) => res.render('home'))
app.get('/news', (req, res) => res.render('news'))

app.listen(port, () => console.log(`Application's Luong is running at http://localhost:${port}`))