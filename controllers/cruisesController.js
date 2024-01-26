const knex = require("knex")(require("../knexfile"));
const dictionary = require("../dictionary");

const convertResponsesToInt = (responses) => {
  for (response in responses) {
    const val = responses[response];
    responses[response] = dictionary.toInt[val] ? dictionary.toInt[val] : 0;
  }
};

const convertResponseToString = (response) => {
  for (item in response) {
    response[item] =
      dictionary.toStr[item][response[item] === 1 ? "one" : "two"];
  }
};

const getCruisesByRequest = async (req, res) => {
  //    responses = req.body
  //    formatResponses(responses);
  //   const {
  //     climate,
  //     outdoors,
  //     household,
  //     party,
  //     income,
  //     length,
  //     adventure,
  //     spa,
  //     environmental,
  //     gaming,
  //     food,
  //     fitness,
  //     shop,
  //     lodging,
  //   } = responses

  let responses = {
    climate: "cold",
    outdoors: "wilderness",
    household: "partner",
    party: "party",
    income: "luxury",
    length: "short",
    adventure: "no",
    spa: "yes",
    environmental: "no",
    gaming: "no",
    food: "yes",
    fitness: "yes",
    shop: "yes",
    lodging: "no",
  };

  convertResponsesToInt(responses);

  try {
    const response = await knex("cruise_page");

    let formattedResponses = response
      .map((cruise) => {
        let score = 0;
        for (item in cruise.traffic_pref) {
          if (cruise.traffic_pref[item] === responses[item]) score++;
        }
        cruise.score = score;
        if (score > 2) return cruise;
      })
      .sort((a, b) => {
        return b.score - a.score;
      });

    formattedResponses.forEach((response) => {
      convertResponseToString(response.traffic_pref);
    });

    res.json(formattedResponses);
  } catch (error) {
    console.log(error);
    res.status(400).send(`Failed to retrieve data: ${error}`);
  }
};

module.exports = { getCruisesByRequest };
