/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("menu", function (table) {
    table.increments("id").primary().unsigned();
    table.string("title").notNullable();
    table.string("parent");
    table.boolean("active").defaultTo(0);
    table.string("page").notNullable();
    table.string("alias");
    table.integer("sorting").notNullable();
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("menu");
};
