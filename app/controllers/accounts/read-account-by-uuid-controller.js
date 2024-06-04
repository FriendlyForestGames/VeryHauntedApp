const { validateUuid } = require("app/validation/util/uuid-validator.js");

const readAccountByUuid = (req, res) => {
  const { uuid } = req.params;

  if (!validateUuid(uuid)) {
  }
};
