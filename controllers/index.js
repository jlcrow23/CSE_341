const awesomeFunction = (req, res, next) => {
  res.json('Wayne Crowther');
};

const returnAnotherPerson = (req, res, next) => {
  res.json('Jolene Reneau');
};

module.exports = { awesomeFunction, returnAnotherPerson };
