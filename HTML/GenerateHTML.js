// Generate Employee Functions

const generateManager = manager => {
    return `
    <div id="name-header">
        <h3 class="employee-names> Manager: ${manager.name}
    </div>
    <div class="employee-info>
        <span>ID: ${manager.id}</span>
        <span>Email: ${manager.email}
        <span>Office Number: ${manager.officeNumber}</span>
    </div>`;
};

const generateEngineer = engineer => {
    return `   
    <div id="name-header">
        <h3 class="employee-names> Employee: ${engineer.name}
    </div>
    
    <div class="employee-info>
        <span>Githib: ${engineer.github}</span>
        <span>Email: ${engineer.email}
        <span>ID: ${engineer.id}</span>
        <span>Role: ${engineer.role}</span>
    </div>`
};

const generateIntern = intern => {
    return `
    <div id="name-header">
        <h3 class="employee-names> Intern: ${intern.name}
    </div>
    
    <div class="employee-info>
        <span>Githib: ${intern.github}</span>
        <span>Email: <a href="mailto:${intern.email}>${intern.email}</a>
        <span>ID: ${intern.id}</span>
        <span>Role: ${intern.role}</span>
        <span>School: ${intern.school}<span>
    </div>`
}

// Generate employee information to push into the Team Profiles function using an array

const generateHTML = employeeList => {
    employeeArray = [];
    for (let i = 0; employeeList.length>i; i++){ 
        const role = employeeList[i].getRole();


        if (role === 'Manager'){ 
            employeeArray.push(generateManager(employeeList[i]));
        }
        if (role === 'Engineer'){ 
            employeeArray.push(generateEngineer(employeeList[i]));
        }
        if (role === 'Intern'){ 
            employeeArray.push(generateIntern(employeeList[i]));
        }
    }
    const completeTeam = employeeArray.join(''); 
    return generateTeamProfiles(completeTeam); 
};

// Complete HTML Generation Function 

const generateTeamProfiles = teamProfile => {   
    return`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link rel="stylesheet" href="./style.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        </head>

        <body>
            <header id="team-header></header>

            <main id="employee-cards"> 
                ${completeTeam}
            </main>
        </body>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
    `
};

module.exports = {
    generateManager,
    generateEngineer,
    generateIntern,
    generateTeamProfiles,
    generateHTML
};