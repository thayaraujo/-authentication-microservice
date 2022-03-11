import { Pool } from "pg";

const connectionString = `postgres://${process.env.USER}:${process.env.PGPASSWORD}@kesavan.db.elephantsql.com/ffyjeazw`;

const db = new Pool({ connectionString });

export default db;