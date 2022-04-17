// Generate Employee Functions
const generateManager = manager => {
    return `
    <div class="employee-card col-3 mt-4 mx-4">
        <div class="name-header">
            <h3 class="employee-names text-center">${manager.name}</h3>
        </div>
        <div class="employee-info text-center mt-3">
            <span>${manager.getRole()}</span>
            <span>ID: ${manager.id}</span>
            <span>Email: <a href="mailto:${manager.email}">${manager.email}</a></span>
            <span>Office Number: ${manager.officeNumber}</span>
        </div>
    </div>`;
};

const generateEngineer = engineer => {
    return `
    <div class="employee-card col-3 mt-4 mx-4">
        <div class="name-header">
            <h3 class="employee-names text-center">${engineer.name}</h3>
        </div>

        <div class="employee-info text-center mt-3">
            <span>${engineer.getRole()}</span>
            <span>ID: ${engineer.id}</span>
            <span>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></span>
            <span>Github: ${engineer.github}</span>
        </div>
    </div>`
};

const generateIntern = intern => {
    return `
    <div class="employee-card col-3 mt-4 mx-4">
        <div class="name-header">
            <h3 class="employee-names text-center">${intern.name}</h3>
        </div>

        <div class="employee-info text-center mt-3">
            <span>${intern.getRole()}</span>
            <span>ID: ${intern.id}</span>
            <span>Email: <a href="mailto:${intern.email}">${intern.email}</a></span>
            <span>School: ${intern.school}<span>
        </div>
    </div>`
}

const generateTeamHTML = employeeData => {
    let htmlString = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link rel="stylesheet" href="./style.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        </head>

        <body>
            <header id="team-header" class="text-center">Team Profiles</header>

            <main id="employee-information" class="row justify-content-center">`;

    htmlString += generateManager(employeeData.manager);

    employeeData.engineers.forEach(engineer => {
        htmlString += generateEngineer(engineer);
    });

    employeeData.interns.forEach(intern => {
        htmlString += generateIntern(intern);
    });

    htmlString += `</main>
        </body>
    </html>`;

    return htmlString;
};

module.exports = { generateTeamHTML };
