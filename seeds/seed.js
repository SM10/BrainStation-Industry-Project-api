/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('traffic_pref').del()
  await knex('traffic_pref').insert([
    {climate: 1, outdoors: 2, household: 2, party: 1, income: 1, length: 1, adventure: 2, spa: 2, environmental: 1, gaming: 2, food: 2, fitness: 1, shop:1, lodging:2}
  ]);
  await knex('cruise_page').del()
  await knex('cruise_page').insert([
    {traffic_pref: {climate: 1, outdoors: 2, household: 2, party: 2, income: 1, length: 2, adventure: 2, spa: 1, environmental: 1, gaming: 2, food: 1, fitness: 2, shop:1, lodging:1},
    url: "http://localhost:3000"
  }
  ])
};