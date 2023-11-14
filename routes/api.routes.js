const express = require('express');
const router = express.Router();
router.use("/company", require('./company.route'));
router.use("/profile", require('./profile.route'));
router.use("/address", require('./address.route'));
module.exports = router;