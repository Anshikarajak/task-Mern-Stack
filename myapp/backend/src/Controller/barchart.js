const { getPriceRanges } = require('../services/barChartService');

const barChart = async (req, res) => {
  const { month } = req.params;
  try {
    const result = await getPriceRanges(parseInt(month));
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  barChart,
};


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BarChart = ({ month }) => {
//     const [barData, setBarData] = useState([]);

//     useEffect(() => {
//         fetchBarData();
//     }, [month]);

//     const fetchBarData = async () => {
//         try {
//             const response = await axios.get("http://localhost:3000/bar-chart?month=${month}");
//             setBarData(response.data);
//         } catch (error) {
//             console.error('Error fetching bar chart data:', error);
//         }
//     };

//     return (
//         <div>
//             <h3>Bar Chart for {month}</h3>
//             <ul>
//                 {barData.map((range, index) => (
//                     <li key={index}>{range.range}: {range.count} items</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

