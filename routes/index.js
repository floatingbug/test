var express = require('express');
var router = express.Router();
const ctl_index = require('../controller/ctl_index');

/* GET home page. */
router.get('/', ctl_index) 

module.exports = router;
