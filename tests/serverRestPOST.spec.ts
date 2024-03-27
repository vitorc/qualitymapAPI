import { test, expect } from '@playwright/test';

test('should get something', async ({ request, baseURL }) => {
    const newPost = await request.post(`${baseURL}usuarios`, {
        data: {
            "nome": "Fulano da Silva",
            "email": "beltrano@qa3.com.br",
            "password": "teste",
            "administrador": "true"
        },
    });

    const respBody = JSON.parse(await newPost.text());
    expect(respBody).toHaveProperty('_id');
    expect(respBody.message).toBe("Cadastro realizado com sucesso");
    expect(newPost.status()).toBe(201);
});
