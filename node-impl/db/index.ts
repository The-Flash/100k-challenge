import postgres from "postgres";
import { config } from "dotenv";

config();

const dbConfig = {
    port: parseInt(process.env.POSTGRES_PORT ?? "5432"),
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST
}


export const sql = postgres(dbConfig);
