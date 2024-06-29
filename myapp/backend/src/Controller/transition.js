const { initializeDatabase, listTransactions } = require('../services/transactionService');

const initialize = async (req, res) => {
  try {
    const result = await initializeDatabase();
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTransactions = async (req, res) => {
  const { page = 1, per_page = 10, search = "" } = req.query;
  try {
    const transactions = await listTransactions(parseInt(page), parseInt(per_page), search);
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  initialize,
  getTransactions,
};



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TransactionTable = () => {
//     const [transactions, setTransactions] = useState([]);
//     const [month, setMonth] = useState('March');
//     const [search, setSearch] = useState('');
//     const [page, setPage] = useState(1);
//     const [perPage] = useState(10);

//     useEffect(() => {
//         fetchTransactions();
//     }, [month, search, page ,perPage]);

//     const fetchTransactions = async () => {
//         try {
//             const response = await axios.get("http://localhost:3000/transactions?month=${month}&search=${search}&page=${page}&perPage=${perPage}");
//             setTransactions(response.data.transactions);
//         } catch (error) {
//             console.error('Error fetching transactions:', error);
//         }
//     };

//     return (
//         <div>
//             <div>
//                 <label>Select Month:</label>
//                 <select value={month} onChange={e => setMonth(e.target.value)}>
//                     <option value="January">January</option>
//                     <option value="February">February</option>
//                     <option value="May">March</option>
//                     {/* Add other months */}
//                 </select>
//             </div>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Search transactions..."
//                     value={search}
//                     onChange={e => setSearch(e.target.value)}
//                 />
//             </div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Description</th>
//                         <th>Price</th>
//                         <th>Category</th>
//                         <th>Date of Sale</th>
//                         <th>Sold</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {transactions.map(transaction => (
//                         <tr key={transaction._id}>
//                             <td>{transaction.title}</td>
//                             <td>{transaction.description}</td>
//                             <td>{transaction.price}</td>
//                             <td>{transaction.category}</td>
//                             <td>{new Date(transaction.dateOfSale).toLocaleDateString()}</td>
//                             <td>{transaction.sold ? 'Yes' : 'No'}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
//             <button onClick={() => setPage(page + 1)}>Next</button>
//         </div>
//     );
// };

export default TransactionTable;