const { Client } = require('@heroiclabs/nakama-js');

let instance;
let client;

class Nakama {
  constructor() {
    if (instance) {
      throw new Error('Only able to create a single instance of this class');
    }
    instance = this;

    const useSSL = false; // Enable if server is run with an SSL certificate.
    client = new Client('defaultkey', '127.0.0.1', '7350', useSSL);
  }

  getInstance() {
    return this;
  }

  get client() {
    return client;
  }
}

const nakama = Object.freeze(new Nakama());
module.exports = nakama;