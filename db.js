import mysql from "mysql";
import * as dotenv from 'dotenv';
dotenv.config();

export const db = mysql.createConnection({
    host: process.env.HOST,
    user: "root",
    password:process.env.PASSWORD,
    database: process.env.DATABASE
})