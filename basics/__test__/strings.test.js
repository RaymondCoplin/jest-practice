
describe('email validation', () => {

    test('this is an email', () => {
        const email = 'raymond@perxist.com';
        expect(email).toMatch(/\S+@\S+\.\S+/);
    });

    test('this isn\'t a email', () => {
        const email = 'raymondperxist.com';
        expect(email).not.toMatch(/\S+@\S+\.\S+/);
    });
});