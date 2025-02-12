import { Router, Request, Response } from 'express'
import { users } from '../mocks/data'

const router = Router()

router.patch('/users/:id', (req: Request, res: Response) => {
    const { id } = req.params
    let { name } = req.body

    try {
        if (!name) {
            throw new Error('É obrigatório informar o nome atualizado.')
        } 
        if (typeof name !== 'string') {
            throw new Error('O nome precisa ser uma string.')
        }

        const user = users.find((user) => user.id === id)

        if (user) {
            user.name = name
        } else {
            res.status(404).send('Usuário não encontrado.')
        }

        res.status(200).send(user)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

export default router