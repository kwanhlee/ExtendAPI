const request = require('supertest');
const app = require('../src/index');

jest.setTimeout(30000);

let extendAPIToken = process.env.EXTEND_API_TOKEN

test('GET /api/transactions/:transactionId returns 200', async () => {
    const response = await request(app).get('/api/transactions/txn_8CZpPTTOsvN9vTc9hX3V7T').set("Accept", "application/vnd.kwanhlee.v2023-02-12+json").set('Authorization', `Bearer ${extendAPIToken}`);
    expect(response.status).toBe(200);
});

test('GET /api/transactions/:transactionId wrong transactionId returns 404', async () => {
    const response = await request(app).get('/api/transactions/txn_WRONG_ID').set("Accept", "application/vnd.kwanhlee.v2023-02-12+json").set('Authorization', `Bearer ${extendAPIToken}`);

    expect(response.status).toBe(404);
    expect(response.text).toBe("{\"data\":{\"status\":404,\"title\":\"Extend API Error\",\"message\":\"ERR_BAD_REQUEST\"}}");
});

afterAll(done => {
    app.close();
    done();
});
