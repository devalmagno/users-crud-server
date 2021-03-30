console.log(`Database URL ${process.env.DATABASE_URL}`);
module.exports = {
    "type": "postgres",
    "host": process.env.HOST,
    "port": 5432,
    "username": process.env.USER,
    "password": process.env.PASS,
    "database": process.env.DB,
    "entities": [
        "dist/entities/**/*.js"
    ],
    "migrations": [
        "./dist/migrations/**/*.js"
    ],
    "cli": {
        "entitiesDir": "src/entities",
        "migrationsDir": "src/migrations/",
    }
}