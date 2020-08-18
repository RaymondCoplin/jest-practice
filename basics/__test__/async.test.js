const getData = require('../src/promises');
const API = 'http://hamburgerapi.azurewebsites.net/api/hamburgers';

it('Should return the Copla Burger info', async () => {
    const response = await getData(API);

    expect(response.data[0].name).toBe('Copla Burger');
});

it('Should fail with a invalid URL', async () => {
    
    expect.assertions(1);

    try {
        await getData('qwertyu');   
    } catch (error) {
        expect(error).not.toBeNull();
    }


});