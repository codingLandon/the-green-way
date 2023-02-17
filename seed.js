require('dotenv').config();
require('./config/database');

const Product = require('./models/product');

// IIFE - Immediately Invoked Function Expression
(async function() {

  await Product.deleteMany({});
  const products = await Product.create([
    {title: 'test', category: 'other', green:true, description: 'test' }
  ])
  console.log(products)
  process.exit();
})();