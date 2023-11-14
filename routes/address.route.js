const express = require('express');
const AddressController = require('../controllers/address.controller');
const router = express.Router();

const addressController = new AddressController();

router.get("/getall", addressController.getAll);
router.get("/getbyid/:id", addressController.getById);
router.get("/getbyaddressid/:id", addressController.getAddressByCompId);
router.post("/add", addressController.addNew);
router.put("/update/:id", addressController.update);
router.delete("/delete/:id", addressController.deleteById);

module.exports = router;