const express = require ('express')
const mysql = require ('mysql')

const app = express();

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'testdb',
    port:3307
})

db.connect((err) => {
    if (err){
        console.log('connected to the MySQL database',err);
        return;
    }
    console.log('connected to the MySQL.database');
});

app.listen(3000,()=> {
    console.log('server is running on part 3000');
});