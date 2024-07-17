import { greetingRouter } from './routers/greeting'
import { router } from './trpc'

export const appRouter = router({
  greting: greetingRouter
})

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter
