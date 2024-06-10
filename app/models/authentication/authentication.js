const nakama = require("../../api/nakama/nakama");

class Authentication {
  constructor() {
    this.client = nakama.getInstance;
  }

  authenticateEmail(email, password) {
    return this.client.authenticateEmail(email, password);
  }
}

module.exports = Authentication;
