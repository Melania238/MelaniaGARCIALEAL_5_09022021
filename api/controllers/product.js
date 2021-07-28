const uuid = require('uuid/v1');
const Product = require('../models/Product');

exports.getAllProducts = (req, res, next) => {
  Product.find().then(
    (product) => {
      const mappedProduct = products.map((product) => {
        product.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + product.imageUrl;
        return product;
      });
      res.status(200).json(mappedProducts);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  );
};

