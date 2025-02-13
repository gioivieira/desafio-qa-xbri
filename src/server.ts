import app from './index'
import { Server } from 'http'

let server: Server

export const startServer = (port: number = 3003): Promise<void> => {
    return new Promise((resolve) => {
        server = app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}.`)
            resolve()
        })
    })
}

export const stopServer = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        if (server) {
            server.close((err) => {
                if (err) {
                    console.error('Erro ao encerrar o servidor:', err)
                    reject(err)
                } else {
                    console.log('Servidor encerrado.')
                    resolve()
                }
            })
        } else {
            resolve()
        }
    })
}

if (require.main === module) {
    startServer()
}