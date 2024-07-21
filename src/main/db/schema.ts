import { sql } from 'drizzle-orm'
import { text, pgTable } from 'drizzle-orm/pg-core'
export const users = pgTable('users', {
  id: text('id'),
  textModifiers: text('text_modifiers')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`)
})
