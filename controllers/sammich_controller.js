let express = require("express");
let router = express.Router();
let sammich = require("../models/sammich")



router.get("/", function (req, res) {
    res.redirect("/sammiches");
});

router.get("/sammiches", function (req, res) {
    sammich.selectAll(function (data) {
        let hbObject = {
            sammich: data
        };
        res.render("index", hbObject);
    });
});

router.post("/api/sammiches", function (req, res) {
    sammich.createSammich(req.body.sammich_name, function (data) {
        res.send(data)
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