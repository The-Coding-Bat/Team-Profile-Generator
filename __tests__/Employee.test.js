const Employee = require('../lib/Employee');

test('Employee Object', () => {
    const employee = new Employee('Bruce Wayne', 27, 'IamnotBatman@WayneEnterprises.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Employee name', () => {
    const employee = new Employee('Bruce Wayne', 27, 'IamnotBatman@WayneEnterprises.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('Employee ID', () => {
    const employee = new Employee('Bruce Wayne', 27, 'IamnotBatman@WayneEnterprises.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('Employee email', () => {
    const employee = new Employee('Bruce Wayne', 27, 'IamnotBatman@WayneEnterprises.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('Employee role', () => {
    const employee = new Employee('Bruce Wayne', 27, 'IamnotBatman@WayneEnterprises.com');

    expect(employee.getRole()).toEqual("Employee");
}); 