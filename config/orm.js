// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

let connection = require("./connection.js");

let orm = {
    //   * `selectAll()`
    all: function (tableInput, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    //   * `insertOne()`
    create: function (name, cb) {
        connection.query("INSERT INTO sammiches (sammich_name) VALUES (?)", [name], function (err, res) {
            if (err) {
                throw err;
            }
            console.log(res);
        });
    },

    //   * `updateOne()`
    update: function (id, cb) {
        connection.query("UPDATE sammiches SET ? WHERE ?", [{ devoured: true }, { id: id }], function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    delete: function (id, cb) {
        connection.query("DELETE FROM sammiches WHERE ?", [{ id: id }], function (err, res) {
            if (err) {
                throw err;
            }

            cb(res);
        });
    }
};

module.exports = orm;

