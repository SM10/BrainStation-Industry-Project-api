const toInt = {
  warm: 1,
  cold: 2,
  culture: 1,
  wilderness: 2,
  family: 1,
  partner: 2,
  party: 1,
  laidBack: 2,
  luxury: 1,
  budget: 2,
  short: 1,
  long: 2,
  yes: 1,
  no: 2,
};

const toStr = {
  climate: {
    one: "warm",
    two: "cold",
  },
  outdoors: {
    one: "culture",
    two: "wilderness",
  },
  household: {
    one: "family",
    two: "partner",
  },
  party: {
    one: "party",
    two: "laidBack",
  },
  income: {
    one: "luxury",
    two: "budget",
  },
  length: {
    one: "short",
    two: "long",
  },
  adventure: {
    one: "yes",
    two: "no",
  },
  spa: {
    one: "yes",
    two: "no",
  },
  environmental: {
    one: "yes",
    two: "no",
  },
  gaming: {
    one: "yes",
    two: "no",
  },
  food: {
    one: "yes",
    two: "no",
  },
  fitness: {
    one: "yes",
    two: "no",
  },
  shop: {
    one: "yes",
    two: "no",
  },
  lodging: {
    one: "yes",
    two: "no",
  },
};

module.exports = {
  toInt,
  toStr,
};
