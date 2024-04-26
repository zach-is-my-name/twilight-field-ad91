import * as crypto from "node:crypto"
import * as LitJsSdk from "@lit-protocol/lit-node-client-nodejs";
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const litNodeClient = new LitJsSdk.LitNodeClientNodeJs({
      alertWhenUnauthorized: false,
      litNetwork: "cayenne",
    });

    const connected = await litNodeClient.connect();
		console.log(connected)


    return new Response('Hello World!');
  },
};
