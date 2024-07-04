import 'dotenv/config';
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { getKeypairFromEnvironment } from '@solana-developers/helpers';
import { getOrCreateAssociatedTokenAccount } from '@solana/spl-token';

const connection = new Connection(clusterApiUrl("devnet"));
const user = getKeypairFromEnvironment('SECRET_KEY');

console.log(
  `User is: ${user.publicKey.toBase58()}`
);

const tokenMintKey = process.env['TOKEN_MINT_KEY'];
const tokenMint = new PublicKey(tokenMintKey);

const account = await getOrCreateAssociatedTokenAccount(connection, user, tokenMint, user.publicKey);

console.log('Got token account: ', account.address.toBase58());
