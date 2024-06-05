const express = require("express");
const morgan = require('morgan');
const { create } = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// Template engine
const hbs = create({
    extname: '.handlebars',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'resources/views/layouts/'),
    partialsDir: path.join(__dirname, 'resources/views/partials/')
});

// cap quyen truy cap file
app.use(express.static(path.join(__dirname, 'resources/public/')))

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views')); // Đảm bảo đường dẫn đúng tới thư mục views

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/new', (req, res) => {
    res.render('new');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
