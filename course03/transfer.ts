import 'dotenv/config';
import { getKeypairFromEnvironment } from '@solana-developers/helpers';
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import { createMemoInstruction } from '@solana/spl-memo';

const sender = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `Sender is: ${sender.publicKey.toBase58()}`
);

const connection = new Connection(clusterApiUrl('devnet'));

const receiver = new PublicKey('E8fcsDTokKM6XvutFx48JnFh2a28DZJSJy8fgx8J8YpS');

let receiverBalance = await connection.getBalance(receiver);
console.log(`Receiver is: ${receiver.toBase58()} with balance ${receiverBalance / LAMPORTS_PER_SOL}`);

const transaction = new Transaction();

const transferInstruction = SystemProgram.transfer({
  fromPubkey: sender.publicKey,
  toPubkey: receiver,
  lamports: 0.1 * LAMPORTS_PER_SOL,
});
const memoInstruction = createMemoInstruction('Thanks! :)');

transaction.add(transferInstruction);
transaction.add(memoInstruction);

console.log('Sending 0.1 SOL...');

const signature = await sendAndConfirmTransaction(connection, transaction, [
  sender
]);

console.log(`Successfully sent transaction with hash: ${signature}`);

receiverBalance = await connection.getBalance(receiver);
console.log(`Receiver is: ${receiver.toBase58()} with balance ${receiverBalance / LAMPORTS_PER_SOL} after send`);
