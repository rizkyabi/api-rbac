const configDb = require("../../knexfile");
const env = configDb["development"];
const db = require("knex")(env);

module.exports = db;
