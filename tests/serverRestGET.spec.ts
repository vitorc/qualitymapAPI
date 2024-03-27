import { test, expect } from '@playwright/test';
import axios from 'axios';

test('GET an user by ID', async({request, baseURL})=>{
    const getUser = await request.get(`${baseURL}usuarios/4PZFaAz33TUMaXvT`);
    expect(getUser.status()).toBe(200);
    const userData = await getUser.json();
    expect(userData.nome).toBe("DorthaDVM");
    expect(userData.email).toBe("GreenPhDu@qa.com.br");
    expect(userData.password).toBe("355");
    expect(userData.administrador).toBe("true");
    expect(userData._id).toBe("4PZFaAz33TUMaXvT");
});
test('GET an user by EMAIL', async({baseURL})=>{
    const userEmail = 'GreenPhDu%40qa.com.br';

    try {
        const response = await axios.get(`${baseURL}usuarios?email=${userEmail}`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        expect(response.status).toBe(200);
        const userData = response.data;
        expect(userData.length).toBe(1); 
        expect(userData[0].nome).toBe("DorthaDVM");
        expect(userData[0].email).toBe("GreenPhDu@qa.com.br");
        expect(userData[0].password).toBe("355");
        expect(userData[0].administrador).toBe("true");
        expect(userData[0]._id).toBe("4PZFaAz33TUMaXvT");
    } catch (error) {
        console.error('Error:', error);
    }
});
test('GET an user by NAME', async({baseURL})=>{
    const userName = 'DorthaDVM';

    try {
        const response = await axios.get(`${baseURL}usuarios?email=${userName}`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        expect(response.status).toBe(200);
        const userData = response.data;
        expect(userData.length).toBe(1); 
        expect(userData[0].nome).toBe("DorthaDVM");
        expect(userData[0].email).toBe("GreenPhDu@qa.com.br");
        expect(userData[0].password).toBe("355");
        expect(userData[0].administrador).toBe("true");
        expect(userData[0]._id).toBe("4PZFaAz33TUMaXvT");
    } catch (error) {
        console.error('Error:', error);
    }
});