/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("traffic_pref").del();
  await knex("traffic_pref").insert([
    {
      climate: 1,
      outdoors: 2,
      group: 2,
      party: 1,
      package: 1,
      length: 1,
      adventure: 2,
      wellness: 2,
      food: 1,
      shop: 2,
      lodging: 2,
      insurance: 1,
    },
    {
      climate: 2,
      outdoors: 2,
      group: 1,
      party: 1,
      package: 2,
      length: 1,
      adventure: 2,
      wellness: 2,
      food: 2,
      shop: 1,
      lodging: 1,
      insurance: 1,
    },
  ]);
  await knex("cruise_page").del();
  await knex("cruise_page").insert([
    {
      traffic_pref: {
        climate: 2,
        outdoors: 2,
        group: 1,
        party: 1,
        package: 2,
        length: 1,
        adventure: 2,
        wellness: 2,
        food: 2,
        shop: 1,
      },
      url: "http://localhost:3000/cruises/oceania",
    },
    {
      traffic_pref: {
        climate: 1,
        outdoors: 1,
        group: 1,
        party: 2,
        package: 1,
        length: 1,
        adventure: 1,
        wellness: 2,
        food: 1,
        shop: 1,
      },
      url: "http://localhost:3000",
    },
    {
      traffic_pref: {
        climate: 1,
        outdoors: 1,
        group: 1,
        party: 1,
        package: 1,
        length: 1,
        adventure: 1,
        wellness: 1,
        food: 1,
        shop: 1,
      },
      url: "http://localhost:3000",
    },
  ]);
};
