import express from 'express';
import Product from '../models/productModel.js';
import expressAsyncHandler from 'express-async-handler';

const router = express.Router();

// @desc   Fetch all Products
// @route  Get api/products
// @access Public
router.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    // empty object => request all
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc   Fetch single Product
// @route  Get api/products/:id
// @access Public
router.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

export default router;
