import { test, expect } from '@playwright/test';
import axios from 'axios';

test('should delete user', async ({ baseURL }) => {
    const userId = 'dfCJiOtqn1pFcKnJ';
    const response = await axios.delete(`${baseURL}usuarios/${userId}`);
        if(response.data.message == "Registro excluído com sucesso"){
            expect(response.status).toBe(200);
            expect(response.data.message).toBe("Registro excluído com sucesso");
        }
        else{
            expect(response.status).toBe(200);
            expect(response.data.message).toBe("Nenhum registro excluído");
            throw new Error('Nenhum registro excluído');
        }
});
