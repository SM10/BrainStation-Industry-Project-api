const knex = require("knex")(require("../knexfile"));
const dictionary = require("../dictionary");

const convertResponsesToInt = (responses) => {
  for (response in responses) {
    const val = responses[response];
    responses[response] = dictionary.toInt[val] ? dictionary.toInt[val] : 0;
  }
};

const addToTrafficTable = async (req, res) => {
  let response = req.body;

  convertResponsesToInt(response);

  try {
    const newUID = await knex("traffic_pref").insert(response);
    res.status(201).json(newUID[0]);
  } catch (error) {
    res.status(400).send(`Failed to retrieve data: ${error}`);
  }
};

module.exports = {
  addToTrafficTable,
};
