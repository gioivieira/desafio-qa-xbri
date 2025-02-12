import { Router, Request, Response } from 'express'
import { users } from '../mocks/data'

const router = Router()

router.get('/users', (req: Request, res: Response) => {
    try {
        res.status(200).send(users)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

export default router