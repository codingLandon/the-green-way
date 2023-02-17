const Product = require('../../models/product');

module.exports = {
  index,
  show,
  create,
  delete: deleteProduct,
  edit,
  update
};

async function update(req, res) {
  req.body.done = req.body.done === 'on';
  const product = Product.updateOne(req.params.id, req.body);
  res.json(product);
}

async function edit(req, res) {
    const product = await Product.getOne(req.params.id);
    res.json(product)
}

async function deleteProduct(req, res) {
  const product = await Product.deleteOne(req.params.id);
  res.json(product);
}

async function create(req, res) {
    console.log(req.body)
  const product = await Product.create(req.body);
  res.json(product);
}

async function index(req, res) {
  const products = await Product.find({});
  res.json(products);
}

async function show(req, res) {
   const product = await Product.getOne(req.params.id);
   res.json(product);
}