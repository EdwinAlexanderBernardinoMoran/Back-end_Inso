const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 4000,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    database: process.env.DATABASE
}

module.exports = { config };