const Intern = require('../lib/Intern');

test('Intern object', () => {
    const intern = new Intern('Bruce Wayne', 27, 'IamnotBatman@WayneEnterprises.com', 'totallynotBatman');
    expect(intern.school).toEqual(expect.any(String));
});

test('Intern school', () => {
    const intern = new Intern('Bruce Wayne', 27, 'IamnotBatman@WayneEnterprises.com', 'totallynotBatman');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Intern Role', () => {
    const intern = new Intern('Bruce Wayne', 27, 'IamnotBatman@WayneEnterprises.com', 'totallynotBatman');
    expect(intern.getRole()).toEqual("Intern");
}); 