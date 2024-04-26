// Extend the global 'globalThis' interface
declare global {
  interface globalThis {
    crypto: Crypto;
  }
}

// Re-export the 'crypto' module
import * as crypto from 'node:crypto';
globalThis.crypto = crypto;

// Rest of your code...
import * as LitJsSdk from "@lit-protocol/lit-node-client-nodejs";
