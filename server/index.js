const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoConnect = require('./utils/mongoConnect');
const userRoute = require('./routes/user.route');
const adminRoute = require('./routes/admin.route');
const formRoute = require('./routes/form.route');

const app = express();

env.config();
mongoConnect();

app.use(bodyParser.json());
app.use(cors());


app.use('/form', formRoute);
app.use('/user', userRoute);
app.use('/admin', adminRoute);


app.listen(8000, ()=>{
    console.log("Server is running on Port: 8000");
});