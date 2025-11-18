# Strength Progress Tracker - Demo Guide

## Overview
This document provides a comprehensive guide for demonstrating the Strength Progress Tracker application.

## Demo Scenario
The demo showcases a privacy-preserving strength training tracker that uses Fully Homomorphic Encryption (FHE) to protect user data.

## Key Features Demonstrated

### 1. Wallet Connection
- Connect Rainbow wallet
- Network selection (Sepolia testnet recommended for demo)
- FHEVM initialization

### 2. Recording Training Data
- Input weight, sets, and reps
- Real-time form validation
- Encrypted data submission to blockchain

### 3. Viewing Training History
- Load encrypted records from blockchain
- Request decryption of individual records
- View decrypted training data

### 4. Privacy Features
- Data encrypted before blockchain storage
- User-controlled decryption
- Zero-knowledge privacy preservation

## Demo Steps

1. **Setup Environment**
   ```bash
   npm install
   cd frontend && npm install
   npm run dev:mock
   ```

2. **Connect Wallet**
   - Open browser to localhost:3000
   - Click "Connect Wallet"
   - Select Rainbow wallet
   - Choose Sepolia network

3. **Record Training Session**
   - Enter weight: 100 kg
   - Enter sets: 3
   - Enter reps: 10
   - Click "Record Training Session"

4. **View Training History**
   - Click "Refresh" to load records
   - Click "Decrypt" on any record to view data

## Technical Implementation

- **Smart Contract**: Solidity with FHEVM integration
- **Frontend**: Next.js with React and TypeScript
- **Encryption**: Zama FHE library for privacy
- **Wallet**: RainbowKit for seamless connection

## Security Highlights

- All training data encrypted on-chain
- Only user can decrypt their own data
- Relayer service handles FHE computations
- No plaintext data exposed to blockchain

## Performance Metrics

- Gas-optimized smart contract
- Responsive mobile-friendly UI
- Efficient FHE operations
- Fast decryption with retry logic

---
*This demo showcases cutting-edge privacy technology in Web3 fitness tracking.*
