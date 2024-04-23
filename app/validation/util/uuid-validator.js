const { validate: uuidValidate } = require("uuid");

function validateUuid(uuid) {
  return uuidValidate(uuid);
}

module.exports = {
  validateUuid,
};
