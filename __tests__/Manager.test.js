const Manager = require('../lib/Manager');
  
test('Manager object', () => {
    const manager = new Manager('Bruce Wayne', 1939, 'IamnotBatman@WayneEnterprises.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Manager role', () => {
    const manager = new Manager('Bruce Wayne', 1939, 'IamnotBatman@WayneEnterprises.com');
    expect(manager.getRole()).toEqual("Manager");
}); 