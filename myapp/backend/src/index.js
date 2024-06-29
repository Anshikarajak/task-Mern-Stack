const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const initRoutes = require('./routes/init');
const transactionRoutes = require('./routes/transactions');
const statisticsRoutes = require('./routes/statistics');
const barChartRoutes = require('./routes/barChart');
const pieChartRoutes = require('./routes/pieChart');
const combinedRoutes = require('./routes/combined');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mernstackchallenge', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(initRoutes);
app.use(transactionRoutes);
app.use(statisticsRoutes);
app.use(barChartRoutes);
app.use(pieChartRoutes);
app.use(combinedRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
