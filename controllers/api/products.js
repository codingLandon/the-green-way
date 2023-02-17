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
    // console.log(req.body)
    // console.log(req.params)
  const product = await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json(product);
}

async function edit(req, res) {
    const product = await Product.getOne(req.params.id);
    res.json(product)
}

async function deleteProduct(req, res) {
  const product = await Product.deleteOne({_id: req.params.id});
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