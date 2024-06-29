const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/product_transactions", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// import React, { useState } from 'react';
// import TransactionTable from './Controller/TransactionTable';
// import Statistics from './Controller/Statistics';
// import BarChart from './Controller/BarChart';
// import PieChart from './Controller/PieChart';
// import CombinedData from './Controller/CombinedData';

// const App = () => {
//     const [month, setMonth] = useState('March');

//     return (
//         <div>
//             <h1>Product Transactions Dashboard</h1>
//             <div>
//                 <label>Select Month:</label>
//                 <select value={month} onChange={e => setMonth(e.target.value)}>
//                     <option value="January">January</option>
//                     <option value="February">February</option>
//                     <option value="March">March</option>
//                     {/* Add other months */}
//                 </select>
//             </div>
//             <TransactionTable month={month} />
//             <Statistics month={month} />
//             <BarChart month={month} />
//             <PieChart month={month} />
//             <CombinedData month={month} />
//         </div>
//     );
// };

export default App;