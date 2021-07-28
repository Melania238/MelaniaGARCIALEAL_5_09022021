const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/product');

router.get('/', productCtrl.getAllProducts);
// router.get('/:id', productCtrl.getOneCamera);
// router.post('/order', productCtrl.orderCameras);

module.exports = router;