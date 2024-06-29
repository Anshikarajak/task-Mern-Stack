import { barChart } from './Transaction';

const ProductTransaction = require('../models/ProductTransaction');

const getPriceRanges = async (month) => {
  const start = new Date(2024, month - 1, 1);
  const end = new Date(2024, month, 0);

  const priceRanges = {
    "0-100": 0,
    "101-200": 0,
    "201-300": 0,
    "301-400": 0,
    "401-500": 0,
    "501-600": 0,
    "601-700": 0,
    "701-800": 0,
    "801-900": 0,
    "901-above": 0,
  };

  const transactions = await ProductTransaction.find({ dateOfSale: { $gte: start, $lte: end } });

  transactions.forEach(transaction => {
    if (transaction.price <= 100) priceRanges["0-100"]++;
    else if (transaction.price <= 200) priceRanges["101-200"]++;
    else if (transaction.price <= 300) priceRanges["201-300"]++;
    else if (transaction.price <= 400) priceRanges["301-400"]++;
    else if (transaction.price <= 500) priceRanges["401-500"]++;
    else if (transaction.price <= 600) priceRanges["501-600"]++;
    else if (transaction.price <= 700) priceRanges["601-700"]++;
    else if (transaction.price <= 800) priceRanges["701-800"]++;
    else if (transaction.price <= 900) priceRanges["801-900"]++;
    else priceRanges["901-above"]++;
  });

  return priceRanges;
};

module.exports = {
  getPriceRanges,
};

export default barChart;