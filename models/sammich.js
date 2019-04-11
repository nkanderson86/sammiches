//Import the ORM to create functions that will interact with the database

let orm = require("../config/orm");

let sammich = {
    selectAll: function (cb) {
        orm.all("sammiches", function (res) {
            cb(res);
        });
    },
    createSammich: function (name, cb) {
        orm.create(name, function (res) {
            cb(res);
        });
    },
    eatSammich: function (id, cb) {
        orm.update(id, function (res) {
            cb(res);
        });
    },
    deleteSammich: function (id, cb) {
        orm.delete(id, function (res) {
            cb(res);
        });
    }
};

module.exports = sammich