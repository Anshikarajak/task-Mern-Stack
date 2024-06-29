const { getStatistics } = require('../services/statisticService');

const statistics = async (req, res) => {
  const { month } = req.params;
  try {
    const result = await getStatistics(parseInt(month));
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  statistics,
};



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Statistics = ({ month }) => {
//     const [statistics, setStatistics] = useState({ totalSaleAmount: 0, totalSoldItems: 0, totalNotSoldItems: 0 });

//     useEffect(() => {
//         fetchStatistics();
//     }, [month]);

//     const fetchStatistics = async () => {
//         try {
//             const response = await axios.get("http://localhost:3000/statistics?month=${month}");
//             setStatistics(response.data);
//         } catch (error) {
//             console.error('Error fetching statistics:', error);
//         }
//     };

//     return (
//         <div>
//             <h3>Statistics for {month}</h3>
//             <p>Total Sale Amount: {statistics.totalSaleAmount}</p>
//             <p>Total Sold Items: {statistics.totalSoldItems}</p>
//             <p>Total Not Sold Items: {statistics.totalNotSoldItems}</p>
//         </div>
//     );
// };

export default Statistics;