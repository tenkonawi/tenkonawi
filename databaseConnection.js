const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webdb'
})

mysqlConnection.connect((err) => {
    if(err){
        console.log('DB Connection failed.')
    }
    else{
        console.log('Connected to DB.')
    }
})

module.exports = mysqlConnection;