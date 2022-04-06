const Engineer = require('../lib/Engineer');
  
test('Engineer object', () => {
    const engineer = new Engineer('Bruce Wayne', 1939, 'IamnotBatman@WayneEnterprises.com');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('get github', () => {
    const engineer = new Engineer('Bruce Wayne', 1939, 'IamnotBatman@WayneEnterprises.com');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('Engineer role', () => {
    const engineer = new Engineer('Bruce Wayne', 1939, 'IamnotBatman@WayneEnterprises.com');

    expect(engineer.getRole()).toEqual("Engineer");
});
