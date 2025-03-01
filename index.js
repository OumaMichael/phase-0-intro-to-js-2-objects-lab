const employee = {
    name: "Alice Nyambura",
    streetAddress: "123 Pangani"
  };
  
  // Non-destructive update: returns a new object with the updated key and value
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Destructive update: directly mutates the employee object
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Non-destructive deletion: returns a new object without the specified key
  function deleteFromEmployeeByKey(employee, key) {
    // Create a shallow copy using the spread operator
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Destructive deletion: directly deletes the key from the original employee object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Export the employee object and the functions for testing
  module.exports = {
    employee,
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey
  };
  