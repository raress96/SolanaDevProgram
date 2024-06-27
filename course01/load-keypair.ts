import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import bs58 from 'bs58';

const readKeypair = getKeypairFromEnvironment("SECRET_KEY");

const bs58SecretKey = bs58.encode(readKeypair.secretKey);

console.log(
  `✅ Finished! We've loaded our keypair securely, using an env file! Our public key is: ${readKeypair.publicKey.toBase58()}`
);

console.log(`Private key base58 ${bs58SecretKey}`);
