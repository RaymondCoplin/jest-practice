const getData = require('../src/promises');
const API = 'http://hamburgerapi.azurewebsites.net/api/hamburgers'

it('Should return the copla burger information', () => {
    return getData(API).then(response => {
        expect(response.data[0].name).toBe('Copla Burger');
    });
});

it('Should fail with an invalid URL', () => {
    expect.assertions(1);
    return getData(`${API}/123`).catch(err => {
           expect(err).not.toBeNull();
    });
});