const express = require('express');
const path = require('path');
const app = express();
const port = 3008;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('page1');
});

app.get('/page2', (req, res) => {
    res.render('page2');
});

app.get('/page3', (req, res) => {
    res.render('page3');
});

app.get('/page4', (req, res) => {
    res.render('page4');
});

app.get('/page5', (req, res) => {
    res.render('page5');
});





app.get('/gape1', (req, res) => {
    res.render('gape1');
});

app.get('/gape2', (req, res) => {
    res.render('gape2');
});


app.get('/gape3', (req, res) => {
    res.render('gape3');
});









app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
