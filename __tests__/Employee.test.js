const Employee = require("../lib/Employee.js");

test("creates an employee section", () => {
    
    const employee = new Employee('Bruce Wayne', 27, 'IamnotBatman@WayneEnterprises.com');
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toContain("@"); 
    expect(employee.idNumber).toEqual(expect.any(Number));
  });