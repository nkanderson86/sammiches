let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "admin",
    password: "admin",
    database: "sammiches_db"
});

connection.connect(function (err) {
    if (err) {
        console.error(err.stack);
        return;
    }
    console.log("connected as " + connection.theadId);
});

module.exports = connection;