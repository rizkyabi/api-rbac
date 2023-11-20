// Update with your config settings.

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "localhost",
      database: "db_rbac",
      user: "root",
      password: "rizkyabi",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
