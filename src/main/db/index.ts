import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import * as schema from './schema'

const DATABASE_URL = 'postgresql://postgres:qgVm-IUSWLGF1a9A@localhost:5432/drizzle-t3'

const conn = postgres(DATABASE_URL)

export const db = drizzle(conn, { schema })
