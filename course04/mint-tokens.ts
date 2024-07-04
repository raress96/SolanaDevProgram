import 'dotenv/config';
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { getKeypairFromEnvironment } from '@solana-developers/helpers';
import { getOrCreateAssociatedTokenAccount, mintTo } from '@solana/spl-token';

const MINOR_UNITS_PER_MAJOR = Math.pow(10, 9);

const connection = new Connection(clusterApiUrl('devnet'));
const user = getKeypairFromEnvironment('SECRET_KEY');

console.log(
  `User is: ${user.publicKey.toBase58()}`,
);

const tokenMintKey = process.env['TOKEN_MINT_KEY'];
const tokenMint = new PublicKey(tokenMintKey);

const account = await getOrCreateAssociatedTokenAccount(connection, user, tokenMint, user.publicKey);

const minted = await mintTo(connection, user, tokenMint, account.address, user, 1_000 * MINOR_UNITS_PER_MAJOR);

console.log(`Minted to ${user.publicKey.toBase58()}: `, minted);
