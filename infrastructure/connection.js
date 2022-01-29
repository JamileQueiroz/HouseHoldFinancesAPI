const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'admin',
    database: 'household-finances'
})

module.exports = connection