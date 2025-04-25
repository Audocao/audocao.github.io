const mysql = require('mysql2');
const config = "";

const dbConfig = config.development.database; //Adaptaremos mais tarde, para adequar ao ambiente

const pool = mysql.createPool({
    host: dbConfig.host,
    user:dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueTimeOut: 0
});

module.exports = pool.promise(); 