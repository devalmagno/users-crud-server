console.log(`Database URL ${process.env.DATABASE_URI}`);
module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URI,
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