var express = require("express");
var router = express.Router();

var votoController = require("../controllers/votoController");

router.get("/", function (req, res) {
    votoController.testar(req, res);
});

router.post("/cadastrar", function (req, res) {
    votoController.cadastrar(req, res);
})

module.exports = router;