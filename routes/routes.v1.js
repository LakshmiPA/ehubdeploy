var express = require('express');
var router = express.Router();


var AuthController = require('../controllers/v1/authController');
var VendorController = require('../controllers/v1/vendorOperationsController');

/* GET home page. */
router.post('/login', AuthController.login);

router.post('/addVendor',VendorController.addVendor);
router.get('/showAllInputs',VendorController.showAllInputs);
router.get('/showProducts',VendorController.showProducts);
router.post('/addProduct',VendorController.addProduct)


module.exports = router;
