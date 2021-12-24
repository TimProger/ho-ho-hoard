const router = require("express").Router()

const zakaz_productController = require('../../../../project/server/controllers/zakaz_productController.js')

router.post('/', zakaz_productController.createZakaz_Product)
router.get('/', zakaz_productController.getAllZakaz_Product)
router.get('/:id', zakaz_productController.getZakaz_Product)
router.put('/', zakaz_productController.updateZakaz_Product)
router.delete('/', zakaz_productController.deleteZakaz_Product)

module.exports = router