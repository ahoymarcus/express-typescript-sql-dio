import { Pool } from 'pg';

import dotenv from 'dotenv';


const connectionString = process.env.DATABASE_URL;

// Trabalhar com um Pool de conexões
const db = new Pool({ connectionString });




export default db;

     




