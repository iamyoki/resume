import Koa from 'koa'
import { PORT, PORT_MESSAGE } from './constants'
import { router } from './router'
import './routes'

const app = new Koa()

app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT, () => console.log('🎉' + PORT_MESSAGE))
process.on('SIGINT', () => '服务断开')
