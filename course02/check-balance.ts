import 'dotenv/config';
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { airdropIfRequired } from '@solana-developers/helpers';

const url = clusterApiUrl('devnet');
const connection = new Connection(url);

console.log(`Connected to devnet! URL: ${url}`);

const myAddress = process.env['PUBLIC_KEY'];
const publicKey = new PublicKey(myAddress);

await airdropIfRequired(connection, publicKey, 2 * LAMPORTS_PER_SOL, 0.5 * LAMPORTS_PER_SOL);

// Balance is with 9 decimals
const balanceInLamports = await connection.getBalance(publicKey);
const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`Balance for ${myAddress} is ${balanceInSol} SOL (${balanceInLamports} lamports)`);
