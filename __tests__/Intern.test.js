const Intern = require("../lib/Intern.js");

test("creates an intern section", () => {
    
    const intern = new Intern('Bruce Wayne', 27, 'IamnotBatman@WayneEnterprises.com', 'Gotham University');
  
    expect(intern.school).toEqual(expect.any(String));

  });