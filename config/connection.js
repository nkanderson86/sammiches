let mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "admin",
        password: "admin",
        database: "sammiches_db"
    });
}

connection.connect(function (err) {
    if (err) {
        console.error("ERROR: " + err.stack);
        return;
    }
    console.log("connected as " + connection.threadId);
});

module.exports = connection;