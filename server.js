const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


//importing db connection
const connectDB = require('./db/connect');

//importing courses route
const courses = require('./routes/courses');

//creating app server
const app = express();

//body-parser and cors middlewares
app.use(bodyParser.json());
app.use(cors());


//configuring dotenv 
dotenv.config();

//port 
const port = process.env.PORT || 4000;


//initiating db connection
connectDB();



//using routers
app.use('/api/courses', courses);




//app listening at given port 
app.listen(port, () => {
    console.log(`Server started and listening at ${port}`);
});