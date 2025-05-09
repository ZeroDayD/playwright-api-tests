import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
    use: {
        baseURL: process.env.BASE_URL || 'https://jsonplaceholder.typicode.com',
        extraHTTPHeaders: {
            'Content-Type': 'application/json',
        },
    },
    reporter: [['html', { open: 'never' }]]
});
