const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/Products", {useNewUrlParser: true, useUnifiedTopology: true})
var Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: String,
  desc: String,
  url: { type:String, index:true },
  price: Number,
  inStock: Boolean
})

module.exports = ProductModel = mongoose.model('product', ProductSchema)
