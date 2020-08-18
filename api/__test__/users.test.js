const request = require('supertest');
const app = require('../index');

let testServer;
beforeAll(() => {
    testServer = app.listen(5000);
});

afterAll((done) => {
    testServer.close(done);
})

describe('Uses validation', () => {

    it('should have a default user', async () => {
        await request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(res => {
                expect(res.body).toHaveLength(1);
            });
    });

    it('default user should be @raymondcoplin', async () => {
        await request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(res => {
                expect(res.body[0].username).toBe('@raymondcoplin');
            });
    });

});

describe('GET /', () => {
    it('should be an array', async () => {
        await request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(Array.isArray(res.body)).toBeTruthy();
            });
    })
});

describe('POST /', () => {
    it('should create a user', async () => {

        const user = { username: '@anacaceress' };

        await request(app)
            .post('/')
            .send(user)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(Array.isArray(res.body)).toBeTruthy();
                expect(res.body.map(user => user.username)).toContain(user.username);
            });
    })
});