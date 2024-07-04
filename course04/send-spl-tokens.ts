import 'dotenv/config';
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { getKeypairFromEnvironment } from '@solana-developers/helpers';
import { getOrCreateAssociatedTokenAccount, transfer } from '@solana/spl-token';

const MINOR_UNITS_PER_MAJOR = Math.pow(10, 9);
const tokenMintKey = process.env['TOKEN_MINT_KEY'];
const tokenMint = new PublicKey(tokenMintKey);
const recepientAddress = process.env['RECEPIENT_ADDRESS'];
const recepient = new PublicKey(recepientAddress);

const connection = new Connection(clusterApiUrl("devnet"));
const user = getKeypairFromEnvironment('SECRET_KEY');

console.log(
  `Snder is: ${user.publicKey.toBase58()}`
);
console.log(`Receiver is: ${recepient.toBase58()}`);

const senderAccount = await getOrCreateAssociatedTokenAccount(connection, user, tokenMint, user.publicKey);
const destinationAccount = await getOrCreateAssociatedTokenAccount(connection, user, tokenMint, recepient);

const sent = await transfer(connection, user, senderAccount.address, destinationAccount.address, user, 10 * MINOR_UNITS_PER_MAJOR);

console.log(`Sent tokens to receiver!`, sent);
