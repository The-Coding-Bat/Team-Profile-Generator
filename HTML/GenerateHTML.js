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

const generateTeamProfiles = teamProfile => {   
    return`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link rel=stylesheet></link>
        </head>

        <body>
            <header id="team-header></header>

            <main id="employee-cards"> 
            
            </main>
        </body>
    </html>
    `
};

module.exports = {
    generateManager,
    generateEngineer,
    generateIntern,
    generateTeamProfiles
};