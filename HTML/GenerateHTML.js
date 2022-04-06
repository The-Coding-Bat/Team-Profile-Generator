const generateManager = function (manager) {
    return `
    <div id="name-header">
        <h3 class="employee-names> Manager: ${manager.name}
    </div>
    <div class="employee-info></div>`
}

const generateEngineer = function (engineer) {
    return `   
    <div id="name-header">
        <h3 class="employee-names> Employee: ${engineer.name}
    </div>
    
    <div class="employee-info></div>
    `
}

const generateIntern = function (intern) {
    return `
    <div id="name-header">
        <h3 class="employee-names> Intern: ${intern.name}
    </div>
    
    <div class="employee-info></div>`
}

const generateTeamProfiles = function (teamProfiles) {   
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

        <main id="employee-cards"> </main>
    </body>
    `
}

module.exports = generateHTML; 