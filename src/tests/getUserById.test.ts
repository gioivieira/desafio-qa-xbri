import request from 'supertest'
import app from '../index'
import { BASE_URL } from '../constants'

describe('Inicia teste "Buscar um Usuário por ID"', () => {
    test('Deve buscar o usuário pelo ID informado e retornar status 200', async () => {
        const userId = 'd7c5fc5b-6eec-4cd3-b985-fe818c9af04f'
        const response = await request(app).get(`${BASE_URL}/${userId}`)

        const userResponse = response.body

        expect(response.status).toBe(200)
        expect(userResponse.id).toBe(userId)
    })

    test('Deve trazer mensagem de erro informando que o usuário não foi encontrado e retornar status 404', async () => {
        const invalidUserId = '123456'
        const response = await request(app).get(`${BASE_URL}/${invalidUserId}`)

        expect(response.status).toBe(404)
        expect(response.text).toBe('Usuário não encontrado.')
    })
})
