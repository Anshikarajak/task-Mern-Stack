const { getStatistics } = require('../services/statisticService');
const { getPriceRanges } = require('../services/barChartService');
const { getCategories } = require('../services/pieChartService');

const combinedData = async (req, res) => {
  const { month } = req.params;
  try {
    const statistics = await getStatistics(parseInt(month));
    const barChart = await getPriceRanges(parseInt(month));
    const pieChart = await getCategories(parseInt(month));
    res.json({ statistics, bar_chart: barChart, pie_chart: pieChart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  combinedData,
};



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CombinedData = ({ month }) => {
//     const [data, setData] = useState({ statistics: {}, barChart: [], pieChart: {} });

//     useEffect(() => {
//         fetchData();
//     }, [month]);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get("http://localhost:3000/combined?month=${month}");
//             setData(response.data);
//         } catch (error) {
//             console.error('Error fetching combined data:', error);
//         }
//     };

//     return (
//         <div>
//             <h3>Combined Data for {month}</h3>
//             <div>
//                 <h4>Statistics</h4>
//                 <p>Total Sale Amount: {data.statistics.totalSaleAmount}</p>
//                 <p>Total Sold Items: {data.statistics.totalSoldItems}</p>
//                 <p>Total Not Sold Items: {data.statistics.totalNotSoldItems}</p>
//             </div>
//             <div>
//                 <h4>Bar Chart</h4>
//                 <ul>
//                     {data.barChart.map((range, index) => (
//                         <li key={index}>{range.range}: {range.count} items</li>
//                     ))}
//                 </ul>
//             </div>
//             <div>
//                 <h4>Pie Chart</h4>
//                 <ul>
//                     {Object.keys(data.pieChart).map((category, index) => (
//                         <li key={index}>{category}: {data.pieChart[category]} items</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default CombinedData;
