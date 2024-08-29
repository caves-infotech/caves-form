const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.json({code: 404});
});

app.listen(8000, ()=>{
    console.log("Server is running on Port: 8000");
});