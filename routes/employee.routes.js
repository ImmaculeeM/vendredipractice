const express = require('express');
const employeeRoutes = express.Router();
const {create} = require('../controllers/employee.controllers');


employeeRoutes.post('/add', create);


module.exports = employeeRoutes;