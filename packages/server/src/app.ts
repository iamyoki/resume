import cors from '@koa/cors'
import http from 'http'
import Koa from 'koa'
import { PORT, PORT_MESSAGE } from './constants'
import { router } from './router'

const app = new Koa()
const server = http.createServer(app.callback())

app.use(cors())
app.use(router.routes()).use(router.allowedMethods())
app.use(() => require('./socket'))
import './routes'

server.listen(`${PORT}`, () => console.log('🎉' + PORT_MESSAGE))

export { server, app }
