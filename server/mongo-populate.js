const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/Products", {useNewUrlParser: true, useUnifiedTopology: true});
const ProductModel = require('./product-schema.js');

let array = [
  {
    title: "Chain",
    desc: "Silver Chain",
    url: "www.shop.com/chain/",
    price: 1500,
    inStock: false
  },
  {
    title: "Teddy Bear",
    desc: "A giant / huge teddy bear",
    url: "www.shop.com/teddy",
    price: 2000,
    inStock: true
  },
  {
    title: "Card",
    desc: "Gift Card",
    url: "www.shop.com/card",
    price: 90,
    inStock: true
  },
  {
    title: "Snowglobe",
    desc: "Snowglobe",
    url: "www.shop.com/snowglobe",
    price: 420,
    inStock: true
  },
  {
    title: "Coffee Mug",
    desc: "Coffee Mugs",
    url: "www.shop.com/coffee-mugs",
    price: 500,
    inStock: false
  }
]
array.forEach((item) => {
  ProductModel.create(item);
});
