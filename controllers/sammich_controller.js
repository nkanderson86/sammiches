let express = require("express");
let router = express.Router();
let sammich = require("../models/sammich")



router.get("/", function (req, res) {
    res.redirect("/sammiches");
});

router.get("/sammiches", function (req, res) {
    sammich.all(function (data) {
        let hbsObject = {
            sammich: data
        };
        console.log(hbsObject)
        res.render("index", hbsObject);
    });
});

router.post("/api/sammiches", function (req, res) {
    sammich.create([
        "sammich_name", "devoured"
    ], [req.body.name, false],
        function (result) {
            res.json({ id: result.insertId });
        });
});

router.put("/api/sammiches/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    sammich.eatSammich({ devoured: true }, condition, function (data) {

        if (data.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/sammiches/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    sammich.delete(condition, function (data) {
        res.send(data)
    });
})

module.exports = router;