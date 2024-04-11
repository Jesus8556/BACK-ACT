const express = require("express")
const router = express.Router()
const garageController = require("../controllers/garages.controller.js")
const {verificar, multer} = require("../middlewares/index.js")
const verify = verificar.verifyToken
const imagen = multer.subirImagen



router.post("/",verify,garageController.createGarage)

router.get("/",verify,garageController.getGarage)

router.get("/allgarage",garageController.getAllGarage)

router.get("/:garageId",garageController.getGarageById)

router.put("/:garageId",verify,garageController.updateGarage)

router.delete("/:garageId",verify,garageController.deleteGarage)



module.exports = router