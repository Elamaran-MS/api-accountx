const express = require('express');
const ProfileController = require('../controllers/profile.controller');
const router = express.Router();

const profileController = new ProfileController();

router.get("/getall", profileController.getAll);
router.get("/getbyid/:id", profileController.getById);
router.post("/add", profileController.addNew);
router.put("/update/:id", profileController.update);
router.delete("/delete/:id", profileController.deleteById);

module.exports = router;