// Define the employee object (you can modify this for your test setup)
let employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
};

// Function to update employee with a new key and value (non-destructive)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = {...employee}; // Create a copy of the employee object
    newEmployee[key] = value; // Add the new key/value pair
    return newEmployee; // Return the updated copy
}

// Function to destructively update employee with a new key and value
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Modify the original employee object
    return employee; // Return the updated employee
}

// Function to delete a key from the employee object (non-destructive)
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee}; // Create a copy of the employee object
    delete newEmployee[key]; // Remove the key from the copy
    return newEmployee; // Return the updated copy
}

// Function to destructively delete a key from the employee object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Remove the key from the original employee object
    return employee; // Return the updated employee
}

