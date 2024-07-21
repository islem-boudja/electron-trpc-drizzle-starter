import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import * as schema from './schema'
if (!import.meta.env.VITE_DATABASE_URL) {
  throw new Error('VITE_DATABASE_URL is not defined')
}
const conn = postgres(import.meta.env.VITE_DATABASE_URL)

export const db = drizzle(conn, { schema })
