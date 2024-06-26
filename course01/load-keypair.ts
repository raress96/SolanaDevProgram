import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const readKeypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `✅ Finished! We've loaded our keypair securely, using an env file! Our public key is: ${readKeypair.publicKey.toBase58()}`
);
