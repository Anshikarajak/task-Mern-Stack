const express = require('express');
const router = express.Router();
const transactionController = require('../Controller/transition');
const statisticController = require ('../Controller/Statistics')
const barChartController = require('../Controller/barchart');
const pieChartController = require('../Controller/piechart');
const combinedController = require('../Controller/combined');

router.post('/initialize', transactionController.initialize);
router.get('/transactions', transactionController.getTransactions);
router.get('/statistics/:month', statisticController.statistics);
router.get('/bar-chart/:month', barChartController.barChart);
router.get('/pie-chart/:month', pieChartController.pieChart);
router.get('/combined-data/:month', combinedController.combinedData);

module.exports = router;