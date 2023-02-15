const request = require('supertest');
const app = require('../src/index');

jest.setTimeout(30000);

let extendAPIToken = process.env.EXTEND_API_TOKEN

test('GET /api/virtualcards returns 200', async () => {
    const response = await request(app).get('/api/virtualcards')
        .set("Accept", "application/vnd.kwanhlee.v2023-02-12+json")
        .set('Authorization', `Bearer ${extendAPIToken}`);
    expect(response.status).toBe(200);
});

test('GET /api/virtualcards/:cardId/transactions with no status query param specified returns empty array', async () => {
    const response = await request(app).get('/api/virtualcards/vc_AE6gfvYdxwJ7A1h9es1KnJ/transactions')
        .set("Accept", "application/vnd.kwanhlee.v2023-02-12+json").set('Authorization', `Bearer ${extendAPIToken}`);
    expect(response.status).toBe(200);
    expect(response.body.transactions).toStrictEqual([]);
});

test('GET /api/virtualcards/:cardId/transactions with CLEARED status query param specified returns 2 transaction entries', async () => {
    const response = await request(app).get('/api/virtualcards/vc_AE6gfvYdxwJ7A1h9es1KnJ/transactions')
        .query({ status: 'CLEARED' })
        .set("Accept", "application/vnd.kwanhlee.v2023-02-12+json")
        .set('Authorization', `Bearer ${extendAPIToken}`);
    expect(response.status).toBe(200);
    expect(response.body.transactions.length).toBe(2);
});

test('GET /api/virtualcards/:cardId/transactions with incorrect status query parameter returns 400', async () => {
    const response = await request(app).get('/api/virtualcards/vc_AE6gfvYdxwJ7A1h9es1KnJ/transactions')
        .query({ status: 'WRONGNAME' })
        .set("Accept", "application/vnd.kwanhlee.v2023-02-12+json")
        .set('Authorization', `Bearer ${extendAPIToken}`);
    expect(response.status).toBe(400);
});

test('GET /api/virtualcards/:cardId/transactions with incorrect date format query parameter returns 400', async () => {
    const response = await request(app).get('/api/virtualcards/vc_AE6gfvYdxwJ7A1h9es1KnJ/transactions')
        .query({ before: 'WRONGFORMAT' })
        .query({ status: 'CLEARED' })
        .set("Accept", "application/vnd.kwanhlee.v2023-02-12+json")
        .set('Authorization', `Bearer ${extendAPIToken}`);
    expect(response.status).toBe(400);
});

test('GET /api/virtualcards/:cardId/transactions with correct date format query parameter returns 200', async () => {
    const response = await request(app).get('/api/virtualcards/vc_AE6gfvYdxwJ7A1h9es1KnJ/transactions')
        .query({ after: '2019-09-07T15:50-04:00' })
        .query({ status: 'CLEARED' })
        .set("Accept", "application/vnd.kwanhlee.v2023-02-12+json")
        .set('Authorization', `Bearer ${extendAPIToken}`);
    expect(response.status).toBe(200);
    expect(response.body.transactions.length).toBe(2);
});

afterAll(done => {
    app.close();
    done();
});
