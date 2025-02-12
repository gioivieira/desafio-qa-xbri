import { Router, Request, Response } from 'express'
import { users } from '../mocks/data'

const router = Router()

router.delete('/users/:id', (req: Request, res: Response) => {
    const { id } = req.params
    let userToDelete

    try {
        const user = users.find((user) => user.id === id)

        if (user) {
            userToDelete = users.indexOf(user)
            users.splice(userToDelete, 1)
        } else {
            res.status(404).send('Usuário não encontrado.')
        }

        res.status(200).send('Usuário deletado com sucesso.')
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

export default router