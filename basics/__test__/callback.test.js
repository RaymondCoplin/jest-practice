const fetchAPI = require('../src/callback');

it('should return the copla burger info', (done) => {
    const API = 'http://hamburgerapi.azurewebsites.net/api/hamburgers'

    fetchAPI(API, (err, data) => {
        try {
            expect(err).toBeNull();
            expect(data).not.toBeNull();

            expect(data[0].name).toBe('Copla Burger');
            done();
        } catch (error) {
            done(error);
        }
    });

});