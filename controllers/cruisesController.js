const knex = require("knex")(require("../knexfile"));
const dictionary = require("../dictionary");

const threshold = 10;

const convertResponsesToInt = (responses) => {
  for (response in responses) {
    const val = responses[response];
    responses[response] = dictionary.toInt[val] ? dictionary.toInt[val] : 0;
  }
};

const getCruisesByRequest = async (req, res) => {
  responses = req.body;

  convertResponsesToInt(responses);

  try {
    const response = await knex("cruise_page");

    let formattedResponses = response
      .map((cruise) => {
        let score = 0;
        for (item in cruise.traffic_pref) {
          const val = cruise.traffic_pref[item];
          if (val === -1) {
            score++;
            continue;
          }

          if (val === responses[item]) score += 2;
        }
        cruise.score = score;
        return cruise;
      })
      .filter((cruise) => cruise.score >= threshold)
      .sort((a, b) => {
        return b.score - a.score;
      });

    res.json(formattedResponses);
  } catch (error) {
    console.log(error);
    res.status(400).send(`Failed to retrieve data: ${error}`);
  }
};

module.exports = { getCruisesByRequest };
