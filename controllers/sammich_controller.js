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
        "name", "devoured"
    ], [req.body.name, false],
        function (result) {
            res.json({ id: result.insertId });
        });
});

router.put("/api/sammiches/:id", function (req, res) {
    sammich.eatSammich(req.params.id, function (data) {
        res.send(data)
    });
});

router.delete("/api/sammiches/:id", function (req, res) {
    sammich.deleteSammich(req.params.id, function (data) {
        res.send(data)
    });
})

module.exports = router;