import { router, publicProcedure } from '../trpc'

export const greetingRouter = router({
  hello: publicProcedure.query(() => {
    return 'Hello from trpc '
  })
})
