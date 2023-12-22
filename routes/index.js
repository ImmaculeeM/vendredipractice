const express = require('express');
const allRoutes = express.Router();

const employeeRoutes = require('./employee.routes');

allRoutes.use('/employee', employeeRoutes);

module.exports = allRoutes;