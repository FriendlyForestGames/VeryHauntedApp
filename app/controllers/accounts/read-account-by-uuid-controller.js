const { validateUuid } = require("app/validation/util/uuid-validator.js");

const readAccountByUuid = (req, res) => {
  const { uuid } = req.params;

  if (!validateUuid(uuid)) {
    res.status(400).json({ message: "Invalid UUID string provided" });
  }
};
