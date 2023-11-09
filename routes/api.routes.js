const express = require('express');
const router = express.Router();
router.use("/company", require('./company.route'));
router.use("/profile", require('./profile.route'));
module.exports = router;