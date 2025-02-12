import express from 'express'
import cors from 'cors'
import createUserRouter from './endpoints/createUser'
import getUsersRouter from './endpoints/getUsers'
import getUserByIdRouter from './endpoints/getUserById'
import updateUserRouter from './endpoints/updateUser'
import deleteUserRouter from './endpoints/deleteUser'

const app = express()

app.use(cors())
app.use(express.json())

app.use(getUsersRouter)
app.use(getUserByIdRouter)
app.use(createUserRouter)
app.use(updateUserRouter)
app.use(deleteUserRouter)

app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003.')
})