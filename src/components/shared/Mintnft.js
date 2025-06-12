'use client';

import React, { useState } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { 
  Transaction, 
  SystemProgram, 
  LAMPORTS_PER_SOL,
  PublicKey 
} from '@solana/web3.js';
import { 
  createMint,
  getOrCreateAssociatedTokenAccount,
  mintTo,
  TOKEN_PROGRAM_ID 
} from '@solana/spl-token';
import Button from './button';

const MintNFTAndSendUSDCButton = ({ 
  nftMetadata, 
  usdcAmount = 0, 
  recipientAddress,
  className = "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
}) => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleMintAndSend = async () => {
    if (!publicKey) {
      setStatus('Please connect your wallet first');
      return;
    }

    setIsLoading(true);
    setStatus('Processing transaction...');

    try {
      // Create a new transaction
      const transaction = new Transaction();

      // If USDC amount is specified, add USDC transfer instruction
      if (usdcAmount > 0 && recipientAddress) {
        const recipientPubkey = new PublicKey(recipientAddress);
        const transferInstruction = SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: recipientPubkey,
          lamports: usdcAmount * LAMPORTS_PER_SOL, // Convert to lamports
        });
        transaction.add(transferInstruction);
      }

      // Get recent blockhash
      const { blockhash } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = publicKey;

      // Send transaction
      const signature = await sendTransaction(transaction, connection);
      
      // Wait for confirmation
      await connection.confirmTransaction(signature, 'confirmed');
      
      setStatus('Transaction successful!');
      console.log('Transaction signature:', signature);
      
    } catch (error) {
      console.error('Transaction failed:', error);
      setStatus(`Transaction failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={handleMintAndSend}
        disabled={!publicKey || isLoading}
        loading={isLoading}
        text={isLoading ? 'Processing...' : 'Mint NFT & Send USDC'}
        className={className}
      />
      {status && (
        <p className={`text-sm ${status.includes('successful') ? 'text-green-500' : status.includes('failed') ? 'text-red-500' : 'text-yellow-500'}`}>
          {status}
        </p>
      )}
    </div>
  );
};

export default MintNFTAndSendUSDCButton;