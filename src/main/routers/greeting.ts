import { router, publicProcedure } from '../trpc'
import { db } from '../db'
import { users } from '../db/schema'

export const greetingRouter = router({
  hello: publicProcedure.query(() => {
    return 'Hello from trpc '
  }),
  getUsers: publicProcedure.query(async () => {
    const result = await db.select().from(users)
    return result
  }),
  createUser: publicProcedure.mutation(async () => {
    const result = await db
      .insert(users)
      .values({
        id: '1',
        textModifiers: 'some value'
      })
      .returning()
    return result
  })
})
