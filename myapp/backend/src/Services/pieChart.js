import { pieChart } from './Transaction';

const ProductTransaction = require('../models/ProductTransaction');

const getCategories = async (month) => {
  const start = new Date(2024, month - 1, 1);
  const end = new Date(2024, month, 0);

  const transactions = await ProductTransaction.find({ dateOfSale: { $gte: start, $lte: end } });

  const categories = transactions.reduce((acc, transaction) => {
    acc[transaction.category] = (acc[transaction.category] || 0) + 1;
    return acc;
  }, {});

  return categories;
};

module.exports = {
  getCategories,
};

export default pieChart;