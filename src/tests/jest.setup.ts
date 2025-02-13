import { startServer, stopServer } from '../server'

export default async () => {

    await startServer()


    return async () => {
        await stopServer()
    }
}