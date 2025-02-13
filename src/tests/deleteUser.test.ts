import request from 'supertest'
import app from '../index'
import { BASE_URL } from '../constants'

describe('Inicia teste "Deletar um Usuário"', () => {
    const userId = 'd7c5fc5b-6eec-4cd3-b985-fe818c9af04f'
    test('Deve deletar um usuário e retornar status 200', async () => {
        const response = await request(app).delete(`${BASE_URL}/${userId}`)

        expect(response.status).toBe(200) 
        expect(response.text).toBe('Usuário deletado com sucesso.')
    })

    test('Deve tentar deletar o usuário que já foi deletado e retornar status 404', async () => {
        const response = await request(app).delete(`${BASE_URL}/${userId}`)

        expect(response.status).toBe(404) 
        expect(response.text).toBe('Usuário não encontrado.')
    })
})