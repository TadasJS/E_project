import dotenv from "dotenv";
import pg from "pg";

dotenv.config({ path: ".env.dev" });

const { Pool } = pg;

// console.log(pg)

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

export async function connectDB() {
  try {
    await pool.connect();
    console.log("Database connected successfully");
  } catch (error) {
    console.error(error.stack);
    throw error;
  }
}
