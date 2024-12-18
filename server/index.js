require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const mongoConnect = require('./utils/mongoConnect');
const cloudinaryConnect = require('./utils/cloudinaryConnect');
const userRoute = require('./routes/user.route');
const adminRoute = require('./routes/admin.route');
const formRoute = require('./routes/form.route');
const {authenticateUser} = require('./middleware/auth.middleware');

const app = express();

mongoConnect();
cloudinaryConnect();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(fileUpload());

app.use(cors({
    origin: ['http://localhost:3000', 'https://udcprs.com'], 
    credentials: true, 
  }));

app.use(authenticateUser);

app.get('/', (req, res)=>{
    res.json({home: "server is working"})
});
app.use('/form', formRoute);
app.use('/user', userRoute);
app.use('/admin', adminRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log(`Server is running on Port: ${PORT}`);
});