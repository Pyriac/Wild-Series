const tables = require("../../database/tables");

// Declare the action

const browse = async (req, res) => {
  const programsFromDB = await tables.program.readAll();

  res.json(programsFromDB);
};

const read = async (req, res) => {
  const parsedId = parseInt(req.params.id, 10);
  const programsFromDB = await tables.program.readAll();

  const program = await programsFromDB.find((p) => p.id === parsedId);

  if (program != null) {
    res.json(program);
  } else {
    res.sendStatus(404);
  }
};

// Export it to import it somewhere else

module.exports = { browse, read };
