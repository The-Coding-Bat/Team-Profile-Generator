const Manager = require("../lib/Manager.js");

test("creates an manager section", () => {
    
    const manager = new Manager('Bruce Wayne', 27, 'IamnotBatman@WayneEnterprises.com', 1939);
  
    expect(manager.officeNumber).toEqual(expect.any(Number));

  });