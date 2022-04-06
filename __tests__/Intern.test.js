const Intern = require('../lib/Intern');

test('Intern object', () => {
    const intern = new Intern('Bruce Wayne', 1939, 'IamnotBatman@WayneEnterprises.com');
    expect(intern.school).toEqual(expect.any(String));
});

test('Intern school', () => {
    const internSchool = new Intern('Bruce Wayne', 1939, 'IamnotBatman@WayneEnterprises.com');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Intern role', () => {
    const internRole = new Intern('Bruce Wayne', 1939, 'IamnotBatman@WayneEnterprises.com');
    expect(intern.getRole()).toEqual("Intern");
}); 