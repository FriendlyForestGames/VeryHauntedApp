import { Client } from '@heroiclabs/nakama-js';

const useSSL = false; // Enable if server is run with an SSL certificate.
// TODO: this should use .env file variables
const client = new Client('defaultkey', '127.0.0.1', '7350', useSSL);