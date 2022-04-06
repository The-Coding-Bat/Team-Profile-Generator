const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Bruce Wayne', 1939, 'IamnotBatman@WayneEnterprises.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Employee name', () => {
    const employeeName = new Employee('Bruce Wayne', 1939, 'IamnotBatman@WayneEnterprises.com');

    expect(employeeName.getName()).toEqual(expect.any(String));
});

test('Employee ID', () => {
    const employeeId = new Employee('Bruce Wayne', 1939, 'IamnotBatman@WayneEnterprises.com');

    expect(employeeId.getId()).toEqual(expect.any(Number));
});

test('Employee email', () => {
    const employeeMail = new Employee('Bruce Wayne', 1939, 'IamnotBatman@WayneEnterprises.com');

    expect(employeeMail.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('Employee role', () => {
    const employeeRole = new Employee('Bruce Wayne', 1939, 'IamnotBatman@WayneEnterprises.com');

    expect(employeeRole.getRole()).toEqual("Employee");
}); 