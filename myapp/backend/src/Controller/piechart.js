import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PieChart = ({ month }) => {
    const [pieData, setPieData] = useState({});

    useEffect(() => {
        fetchPieData();
    }, [month]);

    const fetchPieData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/pie-chart?month=${month}");
            setPieData(response.data);
        } catch (error) {
            console.error('Error fetching pie chart data:', error);
        }
    };

    return (
        <div>
            <h3>Pie Chart for {month}</h3>
            <ul>
                {Object.keys(pieData).map((category, index) => (
                    <li key={index}>{category}: {pieData[category]} items</li>
                ))}
            </ul>
        </div>
    );
};

export default PieChart;
