const mysql = require('mysql');

exports.getConnection = function () {
    return mysql.createConnection({
        host: 'sql11.freesqldatabase.com',
        user: 'sql11170146',
        password: 'vs7ISaSjaj',
        database: 'sql11170146'
    });
}