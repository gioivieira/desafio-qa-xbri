import { Router, Request, Response } from 'express'
import { users } from '../mocks/data'

const router = Router()

router.get('/users/:id', (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const user = users.find((user) => user.id === id)

        if (user) {
            res.status(200).send(user)
        } else {
            res.status(404).send('Usuário não encontrado.')
        }

    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

export default router