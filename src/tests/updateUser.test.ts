import request from 'supertest'
import app from '../index'
import { BASE_URL } from '../constants'

describe('Inicia teste de "Atualizar um Usuário"', () => {
    test('Deve atualizar o usuário que corresponde ao ID informado e retornar status 200', async () => {
        const userNewName = 'Júlia'
        const userId = 'd7c5fc5b-6eec-4cd3-b985-fe818c9af04f'
        const response = await request(app)
        .patch(`${BASE_URL}/${userId}`)
        .send({
            name: userNewName
        })

        const userResponse = response.body

        expect(response.status).toBe(200)
        expect(userResponse.name).toBe(userNewName)
    })

    test('Deve trazer mensagem de erro informando que o usuário não foi encontrado e retornar status 404', async () => {
        const userNewName = 'Júlia'
        const invalidUserId = '12345'
        const response = await request(app)
        .patch(`${BASE_URL}/${invalidUserId}`)
        .send({
            name: userNewName
        })

        expect(response.status).toBe(404)
        expect(response.text).toBe('Usuário não encontrado.')
    })
})