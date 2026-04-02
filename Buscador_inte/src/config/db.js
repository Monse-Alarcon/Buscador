const { Pool } = require('pg');
require('dotenv').config();

// Configuración dinámica para Render o Local
const pool = new Pool({
    connectionString: process.env.DATABASE_URL || `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    ssl: {
        rejectUnauthorized: false // Vital para bases de datos en la nube como Render
    }
});

pool.on('connect', () => console.log('✅ Conexión exitosa a PostgreSQL'));
pool.on('error', (err) => console.error('❌ Error inesperado en la base de datos', err));

module.exports = pool;