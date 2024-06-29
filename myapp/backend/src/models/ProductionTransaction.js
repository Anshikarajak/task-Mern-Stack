const mongoose = require('mongoose');

const ProductTransactionSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  dateOfSale: Date,
  category: String,
  sold: Number, // 0 for not sold, 1 for sold
});

module.exports = mongoose.model('ProductTransaction', ProductTransactionSchema);