const axios = require('axios');
const ProductTransaction = require('../models/ProductTransaction');

const initializeDatabase = async () => {
  try {
    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    const data = response.data;
    await ProductTransaction.deleteMany({});
    await ProductTransaction.insertMany(data);
    return { status: "Database initialized" };
  } catch (error) {
    throw new Error('Failed to fetch data from third-party API');
  }
};

const listTransactions = async (page, perPage, search) => {
  const query = search ? {
    $or: [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } },
      { price: { $regex: search, $options: 'i' } }
    ]
  } : {};
  const transactions = await ProductTransaction.find(query)
    .skip((page - 1) * perPage)
    .limit(perPage);
  return transactions;
};

module.exports = {
  initializeDatabase,
  listTransactions,
};
  export default transactions