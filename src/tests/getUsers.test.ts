import request from 'supertest'
import app from '../index'
import { BASE_URL } from '../constants'

describe('Inicia teste "Listar Usuários"', () => {
    test('Deve listar usuários e retornar status 200', async () => {
        const response = await request(app).get(`${BASE_URL}`)

        const usersResponse = response.body

        expect(response.status).toBe(200)
        expect(Array.isArray(usersResponse)).toBe(true)
    })
})
