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
        climate: 1,
        outdoors: 1,
        group: 1,
        party: 2,
        package: 2,
        length: 2,
        adventure: 2,
        wellness: 1,
        food: 2,
        shop: 2,
      },
      url: "http://localhost:3000",
      name: "4 Night Bahamas & Perfect Day Cruise",
      img_url:
        "https://www.royalcaribbean.com/cruises/_next/image?url=https%3A%2F%2Frccl-h.assetsadobe.com%2Fis%2Fimage%2Fcontent%2Fdam%2Froyal%2Fports-and-destinations%2Fdestinations%2Fperfect-day%2Fperfect-day-coco-cay-oasis-lagoon-no-pier.jpg%3F%24800x450%24&w=1080&q=75",
      price: 352,
      information:
        "- Stops in Nassau, Bahamas, and Perfect Day at CocoCay, Bahamas, with a day of cruising.\n- Onboard activities like The Perfect Storm℠ waterslides, FlowRider® surf simulator, and various dining options including Giovanni's Table and Chops Grille℠.\n- Entertainment offerings such as Broadway-style shows, ice skating performances, and lounges with live music.",
      ship_type: "Liberty of the Seas",
      destination: "Caribbean",
      departure_port: "Fort Lauderdale, Florida",
    },
    {
      traffic_pref: {
        climate: 2,
        outdoors: 2,
        group: 2,
        party: 1,
        package: 1,
        length: 1,
        adventure: 1,
        wellness: 1,
        food: 1,
        shop: 2,
      },
      url: "http://localhost:3000",
      name: "12 Night Iceland and Scotland",
      img_url:
        "https://www.royalcaribbean.com/cruises/_next/image?url=https%3A%2F%2Frccl-h.assetsadobe.com%2Fis%2Fimage%2Fcontent%2Fdam%2Froyal%2Fdata%2Fports%2Freykjavik-iceland%2Foverview%2Freykjavik-iceland-city-mountan-view.jpg%3F%24800x450%24&w=750&q=75",
      price: 1452,
      information:
        "Explore Iceland and Scotland: Embark on a 12-night journey departing from Amsterdam, discovering the captivating landscapes and cultural richness of both Iceland and Scotland.",
      ship_type: "Jewel of the Seas",
      destination: "Northern Europe",
      departure_port: "Amsterdam",
    },
    {
      traffic_pref: {
        climate: 2,
        outdoors: 2,
        group: 2,
        party: 1,
        package: 1,
        length: 1,
        adventure: 1,
        wellness: 2,
        food: 1,
        shop: 1,
      },
      url: "http://localhost:3000",
      name: "7 NIGHTS Alaska Adventure Cruise",
      img_url:
        "https://www.royalcaribbean.com/cruises/_next/image?url=https%3A%2F%2Frccl-h.assetsadobe.com%2Fis%2Fimage%2Fcontent%2Fdam%2Froyal%2Fdata%2Fports%2Fendicott%2Fendicott-arm-dawes-glacier-icy-snow-cliffs-icebergs.jpg%3F%24800x450%24&w=750&q=75",
      price: 1217,
      information:
        "- Visits to Icy Strait Point, Skagway, Endicott Arm & Dawes Glacier, Juneau, and Victoria, British Columbia, with two days at sea.\n- Onboard activities like RipCord® by iFLY® skydiving simulator, FlowRider® surf simulator, and SeaPlex® with bumper cars and roller skating.\n- Dining experiences at venues like Jamie's Italian by Jamie Oliver, Chops Grille℠, and Izumi, and entertainment options including shows like Sonic Odyssey and Starwater.",
      ship_type: "Ovation of the Seas",
      destination: "Alaska",
      departure_port: "Seattle, Washington",
    },
    {
      traffic_pref: {
        climate: 2,
        outdoors: 1,
        group: 2,
        party: 1,
        package: 1,
        length: 1,
        adventure: 2,
        wellness: 2,
        food: 2,
        shop: 2,
      },
      url: "http://localhost:3000",
      name: "9 Night Canadian and New England Cruise",
      img_url:
        "https://www.royalcaribbean.com/cruises/_next/image?url=https%3A%2F%2Frccl-h.assetsadobe.com%2Fis%2Fimage%2Fcontent%2Fdam%2Froyal%2Fdata%2Fports%2Fboston-massachusetts%2Fboston-massachusetts-historic-acorn-street-beacon-hill.jpg%3F%24800x450%24&w=750&q=75",
      price: 650,
      information:
        "- Visits to various destinations such as Boston, Massachusetts; Portland, Maine; Sydney and Halifax in Nova Scotia; and Saint John (Bay of Fundy) in New Brunswick, interspersed with days at sea.\n- Onboard activities like The Perfect Storm℠ waterslides, FlowRider® surf simulator, and family-friendly aqua parks, as well as spa and fitness center facilities.\nDining options that range from rustic Italian at Giovanni's Table to classic steaks at Chops Grille℠, along with various entertainment options including ice skating shows and live music venues",
      ship_type: "Liberty of the Seas",
      destination: "Maritime, New Jersey",
      departure_port: "Cape Liberty NY",
    },
    {
      traffic_pref: {
        climate: 1,
        outdoors: 1,
        group: 1,
        party: 2,
        package: 2,
        length: 1,
        adventure: 1,
        wellness: 2,
        food: 1,
        shop: 1,
      },
      url: "http://localhost:3000",
      name: "14 NIGHTS Panama Canal Cruise",
      img_url:
        "https://www.royalcaribbean.com/cruises/_next/image?url=https%3A%2F%2Frccl-h.assetsadobe.com%2Fis%2Fimage%2Fcontent%2Fdam%2Froyal%2Fdata%2Fports%2Fcartagena-colombia%2Foverview%2Fcartagena-colombia-close-up-church-of-st-peter-claver.jpg%3F%24800x450%24&w=750&q=75",
      price: 794,
      information:
        "- Diverse Entertainment and Activities: It features the Chef's Table with a five-course dining experience, the City of Dreams stage show, mini golf, and poolside movies.\n- Adventure and Relaxation: The ship includes a Rock Climbing Wall, an outdoor movie screen by the pool, and the Vitality℠ at Sea Spa and Fitness Center.\n- Culinary Delights: Guests can enjoy a range of dining options from Giovanni's Table offering rustic Italian flavors to Chops Grille℠ for steakhouse cuisine, as well as the exotic Asian-inspired dishes at Izumi.",
      ship_type: "Radiance of the Seas",
      destination: "Panama Canal",
      departure_port: "Tampa Bay, Florida",
    },
  ]);
};
