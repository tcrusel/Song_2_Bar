// Load environment variables from .env file
import "dotenv/config";

import fs from "node:fs";
import path from "node:path";
import dotenv from 'dotenv';

const schema = path.join(__dirname, "../../server/database/schema.sql");

// Update the database schema
import mysql from "mysql2/promise";

dotenv.config({
  path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV ?? 'development'}`),
});

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const migrate = async () => {
  try {
    // Read the SQL statements from the schema file
    const sql = fs.readFileSync(schema, "utf8");

    // Create a specific connection to the database
    const database = await mysql.createConnection({
      host: DB_HOST,
      port: DB_PORT as number | undefined,
      user: DB_USER,
      password: DB_PASSWORD,
      multipleStatements: true, // Allow multiple SQL statements
      charset: "utf8mb4",
    });

    await database.query(`drop database if exists ${DB_NAME}`);
    await database.query(`create database ${DB_NAME}`);
    await database.query(`use ${DB_NAME}`);
    await database.query(sql);
    database.end();

    console.info(`${DB_NAME} updated from '${path.normalize(schema)}' 🆙`);
  } catch (err) {
    const { message, stack } = err as Error;
    console.error("Error updating the database:", message, stack);
  }
};

migrate();
