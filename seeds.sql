-- Insert departments
INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Marketing');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 80000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Manager', 90000, 2);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Michael', 'Johnson', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Emily', 'Davis', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Daniel', 'Anderson', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Olivia', 'Martinez', 2, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('William', 'Rodriguez', 1, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Sophia', 'Garcia', 2, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('David', 'Wilson', 1, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Ava', 'Lopez', 2, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('James', 'Lee', 1, 8);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Isabella', 'Harris', 2, 9);
