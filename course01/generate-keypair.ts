import { Keypair } from "@solana/web3.js";
const keypair = Keypair.generate();

import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Finished!`);


const readKeypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `✅ Finished! We've loaded our keypair securely, using an env file! Our public key is: ${readKeypair.publicKey.toBase58()}`
);
