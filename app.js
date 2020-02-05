var express = require('express')
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todo.routes')

// initialize our express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT | 3000;

//Define Routes
app.use('/api/v1.0/todo', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})