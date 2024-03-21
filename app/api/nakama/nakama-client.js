import { Client } from '@heroiclabs/nakama-js';

export class NakamaClient {
  client;

  constructor() {
    const useSSL = false; // Enable if server is run with an SSL certificate.
    // TODO: this should use .env file variables
    this.client = new Client('defaultkey', '127.0.0.1', '7350', useSSL);
  }

  /**
   * TODO: this is a temp method to validate unit testing
   */
  authenticateEmail = async (email, password) => {
    const session = await this.client.authenticateEmail(email, password);
    console.info(session);
  };
}