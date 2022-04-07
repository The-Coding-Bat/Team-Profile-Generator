const Manager = require('../lib/Manager');
  
test('Manager object', () => {
    const manager = new Manager('Bruce Wayne', 27, 'IamnotBatman@WayneEnterprises.com', 1939);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Manager role', () => {
    const manager = new Manager('Bruce Wayne', 27, 'IamnotBatman@WayneEnterprises.com');
    expect(manager.getRole()).toEqual("Manager");
}); 