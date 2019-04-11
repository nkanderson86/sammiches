//Import the ORM to create functions that will interact with the database

let orm = require("../config/orm");

let sammich = {
    all: function (cb) {
        orm.all("sammiches", function (res) {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.create("sammiches", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("sammiches", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("sammiches", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = sammich