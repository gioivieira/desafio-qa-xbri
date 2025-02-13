import request from 'supertest'
import app from '../index'
import { BASE_URL } from '../constants'

describe('Inicia teste "Criar um Usuário"', () => {
    test('Deve criar um novo usuário e retornar status 201', async () => {
        const response = await request(app)
            .post(BASE_URL)
            .send({
                name: 'Roberto Souza',
                email: 'roberto@email.com'
            })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('id')
    })

    test('Deve retornar erro 400 ao tentar criar um usuário sem nome', async () => {
        const response = await request(app)
            .post(BASE_URL)
            .send({
                email: "teste@email.com"
            })

        expect(response.status).toBe(400)
        expect(response.text).toBe('É obrigatório informar o nome e o e-mail.')
    })

    test('Deve retornar erro 400 ao tentar criar um usuário sem e-mail', async () => {
        const response = await request(app)
            .post(BASE_URL)
            .send({
                nome: "Teste"
            })

        expect(response.status).toBe(400)
        expect(response.text).toBe('É obrigatório informar o nome e o e-mail.')
    })
})