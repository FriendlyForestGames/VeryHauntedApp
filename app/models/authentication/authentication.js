const nakama = require("../../api/nakama/nakama");

class Authentication {
  constructor() {
    this.client = nakama;
  }

  authenticateEmail(email, password) {
    return this.client.authenticateEmail(email, password);
  }
}
