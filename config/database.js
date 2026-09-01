 const msql = require('mysql2/promise');

 const db = mysql.createpoll({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projeto_backend_angela',
    port: 3306
 })

 module.exports = db;
