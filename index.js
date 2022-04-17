// Link to page creation
const { generateTeamHTML } = require('./HTML/GenerateHTML.js');

// Node
const fs = require('fs');
const inquirer = require('inquirer');

// Profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Employee Array
const employeeList = {
  manager: {},
  engineers: [],
  interns: []
};

// Add Employee function using Inquirer Prompts
const addEmployee = () => {
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
      let employeeInfo = {};

      // Set Roles into array as objects
      if (role === "Engineer") {
          employeeInfo = new Engineer (name, id, email, github);
          employeeList.engineers.push(employeeInfo);
      } else if (role === "Intern") {
          employeeInfo = new Intern (name, id, email, school);
          employeeList.interns.push(employeeInfo);
      } else if (role === "Manager") {
        employeeInfo = new Manager (name, id, email, officeNumber)
        employeeList.manager = employeeInfo;
      }

      if (confirmAddEmployee) {
          return addEmployee();
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
        } else {
            console.log("Your team profiles have been successfully created!")
        }
    })
};

addEmployee()
  .then(employeeData => {
      return generateTeamHTML(employeeData);
  })
  .then(data => {
    return writeFile(data);
  })
  .catch(err => {
  console.log(err);
});
