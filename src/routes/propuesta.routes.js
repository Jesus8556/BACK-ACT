const express = require("express")
const router = express.Router()
const propuestaController = require("../controllers/propuesta.controller.js")
const {verificar} = require("../middlewares/index.js")
const verify = verificar.verifyToken


router.post("/",verify,propuestaController.createPropuesta)

router.get("/",verify,propuestaController.getPropuesta)

module.exports = router