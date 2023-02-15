const request = require('supertest');
const app = require('../src/index');

let extendAPIToken = process.env.EXTEND_API_TOKEN

test('No Accept header returns a 406 status code', async () => {
    const response = await request(app).get('/api/anyPath').set('Authorization', `Bearer ${extendAPIToken}`);
    expect(response.status).toBe(406);
    expect(response.text).toBe("{\"error\":\"Accept Header Required\"}");
});

test('Incorrect Accept header returns a 406 status code', async () => {
    const response = await request(app).get('/api/anyPath').set("Accept", "application/vnd.wrongName.v2023-02-12+json").set('Authorization', `Bearer ${extendAPIToken}`);
    expect(response.status).toBe(406);
    expect(response.text).toBe("{\"error\":\"Invalid API version in Accept Header\"}");
});

test('GET /api/does-not-exist returns a 404 status code', async () => {
    const response = await request(app).get('/api/does-not-exist').set("Accept", "application/vnd.kwanhlee.v2023-02-12+json").set('Authorization', `Bearer ${extendAPIToken}`);
    expect(response.status).toBe(404);
});

// Testing Utils

afterAll(done => {
    app.close();
    done();
});

