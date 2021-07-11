import { router } from './router'

router.get('/', (ctx, next) => {})

// test
router.get('/test', (ctx, next) => {
  ctx.body =
    '<span style="background:greenyellow; color:green;">test good</span>'
})
