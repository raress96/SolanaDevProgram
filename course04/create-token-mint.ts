import 'dotenv/config';
import { clusterApiUrl, Connection } from '@solana/web3.js';
import { getKeypairFromEnvironment } from '@solana-developers/helpers';
import { createMint } from '@solana/spl-token';

const connection = new Connection(clusterApiUrl("devnet"));
const user = getKeypairFromEnvironment('SECRET_KEY');

console.log(
  `User is: ${user.publicKey.toBase58()}`
);

const mint = await createMint(connection, user, user.publicKey, user.publicKey, 9);

console.log('Created token mint', mint.toBase58());
