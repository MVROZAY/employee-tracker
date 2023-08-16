const connection = require('./db');

class DatabaseQueries {
    async getAllDepartments() {
        return connection.promise().query('SELECT * FROM department');
      } // Implement query to get all departments
    
    async getAllRoles() {
        return connection.promise().query('SELECT * FROM role');
      } // Implement query to get all roles

    async getAllEmployees() {
        return connection.promise().query('SELECT * FROM employee');
      } // Implement query to get all employees
    
     async addDepartment(department) {
        return connection.promise().query('INSERT INTO department SET ?', department);
             }
             // Implement query to add a department

    async addRole(role) {
        return connection.promise().query('INSERT INTO role SET ?', role);
                                  }
                                  // Implement query to add a role
                                  
     async addEmployee(employee) {
        return connection.promise().query('INSERT INTO employee SET ?', employee);
                                                  
                                  }
                                  // Implement query to add an employee
                                  
     async updateEmployeeRole(employeeId, roleId) {
        return connection.promise().query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]);
                                                  
                                  
     }
     // Implement query to update an employee's role
     async updateEmployeeManager(employeeId, managerId) {
        return connection.promise().query('UPDATE employee SET manager_id = ? WHERE id = ?', [managerId, employeeId]);
                                                  
     }
     // Implement query to update an employee's manager
     async deleteDepartment(departmentId) {
        return connection.promise().query('DELETE FROM department WHERE id = ?', departmentId);
          }
          // Implement query to delete a department

    async viewEmployeesByDepartment(departmentId) {
        return connection.promise().query('SELECT * FROM employee WHERE department_id = ?', departmentId);
              }
              // Implement query to view employees by department        
    
}

module.exports = new DatabaseQueries();
