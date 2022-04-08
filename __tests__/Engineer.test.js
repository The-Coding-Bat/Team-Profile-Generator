const Engineer = require("../lib/Engineer.js");

test("creates an engineer section", () => {
    
    const engineer = new Engineer('Bruce Wayne', 27, 'IamnotBatman@WayneEnterprises.com', "TotallyNotBatman");
  
    expect(engineer.github).toEqual(expect.any(String));

  });