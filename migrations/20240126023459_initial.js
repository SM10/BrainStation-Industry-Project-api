/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  knex.schema.createTable("traffic_pref", (table) => {
    table.increments("id").primary();
    table.integer("climate").notNullable(); //Warm or cold?
    table.integer("outdoors").notNullable(); //Culture or wilderness?
    table.integer("household").notNullable(); //Family or Partner?
    table.integer("party").notNullable(); //Party or laid back? 
    table.integer("income").notNullable(); //Luxury or Budget?
    table.integer("length").notNullable(); //Short or long?
    table.integer("adventure").notNullable(); //Are you adventurous?
    table.integer("spa").notNullable(); //Do you want to treat yourself at the Spa?
    table.integer("environmental").notNullable(); //Do you care about environmental sustainability?
    table.integer("gaming").notNullable(); //Do you like gaming?
    table.integer("food").notNullable(); //Do you like good food? 
    table.integer("fitness").notNullable(); //Do you care about fitness?
    table.integer("shop").notNullable(); //Do you want to shop?
    table.integer("lodging").notNullable(); //Will you need a place to stay before or after the cruise? 
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  knex.schema.dropTableIfExists("traffic_pref")
};
