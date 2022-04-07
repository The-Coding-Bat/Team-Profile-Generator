const Engineer = require('../lib/Engineer');
  
test('Engineer object', () => {
    const engineer = new Engineer('Bruce Wayne', 27, 'IamnotBatman@WayneEnterprises.com', 'totallynotBatman');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('get github', () => {
    const engineer = new Engineer('Bruce Wayne', 27, 'IamnotBatman@WayneEnterprises.com', 'totallynotBatman');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('Engineer role', () => {
    const engineer = new Engineer('Bruce Wayne', 27, 'IamnotBatman@WayneEnterprises.com', 'totallynotBatman');

    expect(engineer.getRole()).toEqual("Engineer");
});
