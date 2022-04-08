// Link to page creation
const generateHTML = require('./HTML/generateHTML.js');

// Node
const fs = require('fs'); 
const inquirer = require('inquirer');

// Profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const Employee = require('./lib/Employee');

// Employee Array
const employeeList = [];

// Add Employee function using Inquirer Prompts
const addEmployee = employeeProfile => {
    console.log(`
    =======================
      Add a New Employee
    =======================
    `)

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'What is the Employee Role?',
            choices: ['Manager','Engineer','Intern']
          },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID number of the employee?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the office number of the manager.',
            when:(officeNumberInput) => officeNumberInput.role ==='Manager',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the GitHub username for the employee.',
            when:(githubInput) => githubInput.role ==='Engineer', 
          },
          {
            type: 'input',
            name: 'school',
            message: 'Please enter the name of the interns school.',
            when:(schoolInput) => schoolInput.role ==='Intern', 
          },
          {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false,
          }
    ])
    .then(employeeInformation=> {
      // Storing employee types into EmployeeList array
      let { name, id, email, role, officeNumber, github, school, confirmAddEmployee } = employeeInformation; 
      let employeeInfo; 

      // Set Roles into array as objects 
      if (role === "Engineer") {
          employeeInfo = new Engineer (name, id, email, github);

          console.log(employeeInfo);
      } else if (role === "Intern") {
          employeeInfo = new Intern (name, id, email, school);

          console.log(employeeInfo);
      } else if (role === "Manager") {
        employeeInfo = new Manager (name, id, email, officeNumber)

        console.log(employeeInfo);
      }

      employeeList.push(employeeInfo); 

      if (confirmAddEmployee) {
          return addEmployee(employeeList); 
      } else {
          return employeeList;
      }
  });
};

// Generate HTML
const writeFile = data => {
    fs.writeFile('./HTML/index.html', data, err => {

        if (err) {
            console.log(err);
            return;
       
        } else {
            console.log("Your team profiles have been successfully created!")
        }
    })
}; 

addEmployee()
  .then(employeeList => {
    return generateHTML(employeeList);
  })
  .then(data => {
    return writeFile(data);
  })
  .catch(err => {
 console.log(err);
  });