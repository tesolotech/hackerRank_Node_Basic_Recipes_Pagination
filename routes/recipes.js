
var router = require('express').Router();
const recipts = require('../controllers/recipts.js')

router.get('/', recipts.getReceipts);

module.exports = router;

