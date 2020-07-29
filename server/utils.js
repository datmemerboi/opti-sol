const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/Products", {useNewUrlParser: true, useUnifiedTopology: true});
const ProductModel = require('./product-schema.js');

module.exports.createMongoDB = (doc) => { return ProductModel.create(doc); }

module.exports.readMongoDB = (query) => { return ProductModel.find(query, {_id:0}).exec(); }

module.exports.listAllProducts = () => { return ProductModel.find({}, { title:1, _id:0 }).exec(); }

module.exports.stockProducts = () => { return ProductModel.find({}, {title:1, inStock:1, _id:0 }).exec(); }
