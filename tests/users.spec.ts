import { test, expect, request } from '@playwright/test';

test.describe('User API tests', () => {
    test('GET /users returns 200 and array of users', async ({ request }) => {
        const res = await request.get('/users');
        expect(res.status()).toBe(200);
        const data = await res.json();
        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBeGreaterThan(0);
    });

    test('GET /users/1 returns specific user with id 1', async ({ request }) => {
        const res = await request.get('/users/1');
        expect(res.status()).toBe(200);
        const user = await res.json();
        expect(user.id).toBe(1);
    });
});
