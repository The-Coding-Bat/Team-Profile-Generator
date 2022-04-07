// Link to page creation
const generateHTML = require('./HTML/generateHTML');

// Node
const fs = require('fs'); 
const inquirer = require('inquirer');

// Profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const Employee = require('./lib/Employee');

// Add Manager function using Inquirer Prompts
const addManager = () => {

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the team Manager.', 
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
        }
    ])
};

// Add Employee/Intern function using Inquirer Prompts
const addEmployees = () => {

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the employee's name?", 
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Do you want to add more team members?',
            default: false
        }
        .then(employeeInput => {
            // Pushes employee information into the Employee Array
            const  { name, id, email, github } = managerInput; 
            const employee = new  (name, id, email, officeNumber);
    
            employeeList.push(employee); 
            console.log(employee); 
        })
    ]);
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

addManager()
  .then(addEmployee)
  .then(answers => {
    return generateHTML(answers);
  })
  .then(data => {
    return writeFile(data);
  })
  .catch(err => {
 console.log(err);
  });