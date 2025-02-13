import { Router, Request, Response } from 'express'
import { IdGenerator } from '../services/idGenerator'
import { users } from '../mocks/data'
import { User } from '../types/type'

const router = Router()

router.post('/users', (req: Request, res: Response): void => {
    const idGenerator = new IdGenerator()
    const { name, email } = req.body

    const newUser: User = {
        id: idGenerator.generate(),
        name: name,
        email
    }

    try {
        if (!name || !email) {
            throw new Error('É obrigatório informar o nome e o e-mail.')
        } 

        users.push(newUser)
        res.status(201).send(newUser)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

export default router