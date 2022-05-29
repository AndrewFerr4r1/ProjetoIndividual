var express = require("express");
var router = express.Router();

var mapaController = require("../controllers/mapaController");

router.get("/", function (req, res) {
    mapaController.testar(req, res);
});

router.post("/cadastrar", function (req, res) {
    mapaController.cadastrar(req, res);
})

module.exports = router;