const EmployeeModel = require('../models/employee.models');




const create = async(req,res,next)=>{
try {
    // const newEmployee = new EmployeeModel(req.body);
    const savedEmployee = await EmployeeModel.create(req.body);
    console.log(savedEmployee);
    res.status(201).json({
        message:'Employee saved successfully',
        employee:savedEmployee
    })

} catch (error) {
    res.status(500).send("Failed to save employee")
}
    
}
module.exports = {
    create,
}








9