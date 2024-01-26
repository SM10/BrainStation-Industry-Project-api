const toInt = {
  warm: 1,
  cold: 2,
  culture: 1,
  wilderness: 2,
  multiple: 1,
  single: 2,
  party: 1,
  relaxed: 2,
  luxury: 1,
  standard: 2,
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
  group: {
    one: "multiple",
    two: "single",
  },
  party: {
    one: "party",
    two: "relaxed",
  },
  package: {
    one: "luxury",
    two: "standard",
  },
  length: {
    one: "short",
    two: "long",
  },
  adventure: {
    one: "yes",
    two: "no",
  },
  wellness: {
    one: "yes",
    two: "no",
  },
  food: {
    one: "yes",
    two: "no",
  },
  shop: {
    one: "yes",
    two: "no",
  },
};

module.exports = {
  toInt,
  toStr,
};
