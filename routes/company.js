const express = require('express');
const CompanyController = require('../controllers/company');
const router = express.Router();

const companyController = new CompanyController();

router.get("/getall", companyController.getAll);
router.post("/addnew", companyController.addNew);

module.exports = router;