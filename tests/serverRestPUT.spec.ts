import { test, expect } from '@playwright/test';
import axios from 'axios';

test('should update user name', async ({ baseURL }) => {
    const userId = 'HR7sW043g03ZVzcq';
    const newName = 'Joao Antonio de Cardoso';

    try {
        const response = await axios.put(`${baseURL}usuarios/${userId}`, {
            nome: newName,
            email: "kszkc@emailteste.com.br",
            password: "12345",
            administrador: "true"
        });
        expect(response.status).toBe(200);
        expect(response.data.message).toBe("Registro alterado com sucesso");
    } catch (error) {
        console.error('Error:', error);
    }
});

test('should update user Password', async ({ baseURL }) => {
    const userId = 'HR7sW043g03ZVzcq';
    const newPassword = '12345678';

    try {
        const response = await axios.put(`${baseURL}usuarios/${userId}`, {
            nome: 'Joao Antonio de Cardoso',
            email: "kszkc@emailteste.com.br",
            password: "newPassword",
            administrador: "true"
        });
        expect(response.status).toBe(200);
        expect(response.data.message).toBe("Registro alterado com sucesso");
    } catch (error) {
        console.error('Error:', error);
    }
});
