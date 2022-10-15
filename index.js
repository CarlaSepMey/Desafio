const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const myconn = require('express-myconnection');
const fs = require('fs');

app.use(require('./routes/rutas'))

app.use(myconn(mysql,{
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'mydb'
}))

//puerto del servidor
app.listen(9000, ()=>{
    console.log('corre', 'http:localhost:' + 9000)
})
app.use(cors());
