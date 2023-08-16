const inquirer = require('inquirer');
const queries = require('./queries');

async function mainMenu() {
    while (true) {
  const { choice } = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'Select an option:',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'View Employees by Department',
        'Exit'
      ]
    }
  ]);

  switch (choice) {
    case 'View all departments':
        const allDepartments = await queries.getAllDepartments();
        console.table(allDepartments);
        break;
    case 'View all roles':
      const allRoles = await queries.getAllRoles();
      console.table(allRoles);
      break;
    case 'View all employees':
      const allEmployees = await queries.getAllEmployees();
      console.table(allEmployees);
      break;
    case 'Add a department':
      await addDepartment();
      break;
    case 'Add a role':
      await addRole();
      break;
    case 'Add an employee':
      await addEmployee();
      break;
    case 'Update an employee role':
      await updateEmployeeRole();
      break;
    case 'View Employees by Department':
      await viewEmployeesByDepartment();
      break;
    case 'Exit':
      console.log('Goodbye!');
      process.exit(0);
  }
}

}

async function addDepartment() {
  const { departmentName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'departmentName',
      message: 'Enter the name of the department:'
    }
  ]);

  await queries.addDepartment(departmentName);
  console.log(`Added department "${departmentName}" to the database.`);
  mainMenu();
}

async function addRole() {
  const { roleName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'roleName',
      message: 'Enter the name of the role:'
    }
  ]);

  await queries.addRole(roleName);
  console.log(`Added role "${roleName}" to the database.`);
  mainMenu();
}

async function addEmployee() {
  const { firstName, lastName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'Enter the first name of the employee:'
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'Enter the last name of the employee:'
    }
  ]);

  await queries.addEmployee(firstName, lastName);
  console.log(`Added employee "${firstName} ${lastName}" to the database.`);
  mainMenu();
}

async function updateEmployeeRole() {
  const employees = await queries.getAllEmployees();
  const roles = await queries.getAllRoles();

  // Display a list of employees to choose from
  const employeeChoices = employees.map(employee => ({
    name: `${employee.first_name} ${employee.last_name}`,
    value: employee.id
  }));

  // Display a list of roles to choose from
  const roleChoices = roles.map(role => ({
    name: role.title,
    value: role.id
  }));

  const { employeeId, roleId } = await inquirer.prompt([
    {
      type: 'list',
      name: 'employeeId',
      message: 'Select an employee to update:',
      choices: employeeChoices
    },
    {
      type: 'list',
      name: 'roleId',
      message: 'Select a new role:',
      choices: roleChoices
    }
  ]);

  await queries.updateEmployeeRole(employeeId, roleId);
  console.log(`Updated employee's role successfully.`);
  mainMenu();
}

async function viewEmployeesByDepartment() {
  const departments = await queries.getAllDepartments();

  // Display a list of departments to choose from
  const departmentChoices = departments.map(department => ({
    name: department.name,
    value: department.id
  }));

  const { departmentId } = await inquirer.prompt([
    {
      type: 'list',
      name: 'departmentId',
      message: 'Select a department:',
      choices: departmentChoices
    }
  ]);

  const employeesByDepartment = await queries.getEmployeesByDepartment(departmentId);
  console.table(employeesByDepartment);
  mainMenu();
}

// Start the application
mainMenu();
