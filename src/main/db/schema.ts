import { sql } from 'drizzle-orm'
import { text, pgTable, uuid } from 'drizzle-orm/pg-core'
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  textModifiers: text('text_modifiers')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`)
})
