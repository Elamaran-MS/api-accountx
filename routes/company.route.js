const express = require('express');
const CompanyController = require('../controllers/company.controller');
const router = express.Router();

const companyController = new CompanyController();

router.get("/getall", companyController.getAll);
router.get("/getbyid/:id", companyController.getById);
router.post("/add", companyController.addNew);
router.put("/update/:id", companyController.update);
router.delete("/delete/:id", companyController.deleteById);

module.exports = router;