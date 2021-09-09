// Write your solution in this file!

var employee = {
    name: "",
    address: ""
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
   var newEmp = {...employee};
   newEmp[key] = value;
   return newEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    var newEmp = {...employee};
    delete newEmp[key]; 
    return newEmp
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

