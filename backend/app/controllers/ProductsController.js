const createError = require("http-errors");
const Product = require("../models/Products");

const getPagination = (page, size) => {
  const limit = size;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

class ProductsController {
  async index(req, res, next) {
    const { _page, _size, title } = req.query;

    var condition = title
      ? { title: { $regex: new RegExp(title), $options: "i" } }
      : {};

    const { limit, offset } = getPagination(_page, _size);

    Product.paginate(condition, { offset, limit })
      .then((data) => {
        // console.log(data);

        res.send({
          totalItems: data.totalDocs,
          products: data.docs,
          totalPages: data.totalPages,
          currentPage: data.page - 1,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials.",
        });
      });
  }

  async count(req, res, next) {
    const products = await Product.find({});

    res.send({ total: products.length });
  }

  async create(req, res, next) {
    const { title, description, imageUrl, price } = req.body;

    const newProduct = new Product({ title, description, imageUrl, price });

    await newProduct.save();

    res.json(newProduct);
  }
}

module.exports = new ProductsController();
