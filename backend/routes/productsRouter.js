const express = require("express");
const router = express.Router();
const productsController = require("../app/controllers/ProductsController");

router.get("/", productsController.index);
router.get("/count", productsController.count);
router.post("/", productsController.create);
// router.post('/signin', productsController.signin);
// router.get('/protected', productsController.protected);

module.exports = router;
