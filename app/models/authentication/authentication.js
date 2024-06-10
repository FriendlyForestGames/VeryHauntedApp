const nakama = require("../../api/nakama/nakama");

class Authentication {
  constructor() {
    this.client = nakama;
  }
}
