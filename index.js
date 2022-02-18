const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 8000;

app.engine('hbs', exphbs.engine({
    extname: 'hbs', 
    defaultLayout: 'main'
}))

app.set('view engine', 'hbs');

app.use(express.urlencoded({extended: true}))


app.get('/', (req,res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`listen to: http://localhost:${port}`);
})
