var express = require("express");
var router = express.Router();

var pubController = require("../controllers/pubController");

router.post("/cadastrar", function (req, res) {
    pubController.cadastrar(req, res);
})

router.get("/listarPublicacao", function (req, res) {
    pubController.listarPublicacao(req, res);
})

module.exports = router;