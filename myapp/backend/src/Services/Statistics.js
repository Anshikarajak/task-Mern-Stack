const ProductTransaction = require('../models/ProductionTransaction');
const { getStatistics } = require('./Transaction');

const getStatistics = async (month) => {
  const start = new Date(2024, month - 1, 1);
  const end = new Date(2024, month, 0);

  const totalSales = await ProductTransaction.countDocuments({ dateOfSale: { $gte: start, $lte: end }, sold: 1 });
  const notSold = await ProductTransaction.countDocuments({ dateOfSale: { $gte: start, $lte: end }, sold: 0 });
  const totalAmount = await ProductTransaction.aggregate([
    { $match: { dateOfSale: { $gte: start, $lte: end }, sold: 1 } },
    { $group: { _id: null, total: { $sum: '$price' } } }
  ]);

  return {
    total_sales: totalSales,
    not_sold: notSold,
    total_amount: totalAmount[0] ? totalAmount[0].total : 0
  };
};

module.exports = {
  getStatistics,
};

