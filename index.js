require('dotenv').config();
require('./mongoose.js');

const express = require('express');
const exphbs = require('express-handlebars');
const exerciseRouter = require('./routes/exercises-router.js')
const ExercisesModel = require('./models/ExercisesModel.js')

const app = express();
const port = 8000;

app.engine('hbs', exphbs.engine({
    extname: 'hbs', 
    defaultLayout: 'main'
}))

app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))


app.get('/', (req,res) => {
    res.render('home')
})

// app.get('/exercises', (req,res) => {
//     res.render('exercises/exercises-list')
// })

app.use('/exercises', exerciseRouter);

app.listen(port, () => {
    console.log(`listen to: http://localhost:${port}`);
})
