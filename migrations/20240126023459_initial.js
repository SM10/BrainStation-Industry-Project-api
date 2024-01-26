/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("traffic_pref", (table) => {
      table.increments("id").primary();
      table.integer("climate").notNullable(); //Warm or cold?
      table.integer("outdoors").notNullable(); //Culture or wilderness?
      table.integer("group").notNullable(); //family-partner/single
      table.integer("party").notNullable(); //Party or relaxed?
      table.integer("package").notNullable(); //Luxury or standard?
      table.integer("length").notNullable(); //Short or long?
      table.integer("adventure").notNullable(); //Are you adventurous?
      table.integer("wellness").notNullable(); //Do you want to treat yourself at the Spa?
      table.integer("food").notNullable(); //Do you like good food?
      table.integer("shop").notNullable(); //Do you want to shop?
      table.integer("lodging").notNullable(); //Will you need a place to stay before or after the cruise?
      table.integer("insurance").notNullable(); //Do you want piece of mind?  (medical & trip cancellation insurance)
    })
    .createTable("cruise_page", (table) => {
      table.increments("id").primary();
      table.json("traffic_pref").notNullable();
      table.string("url").notNullable();
      table.string("name").notNullable();
      table.text("img_url").notNullable();
      table.integer("price").notNullable();
      table.text("information").notNullable();
      table.string("ship_type").notNullable();
      table.string("destination").notNullable();
      table.string("departure_port").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("traffic_pref")
    .dropTableIfExists("cruise_page");
};
