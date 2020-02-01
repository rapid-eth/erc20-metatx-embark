# ERC20 MetaTransactions (WIP)

Transfer ERC20 tokens using with using MetaTransactions

### Technology

- ERC20 Token Contract (Simon @ ConsenSys)
- MetaTransction Wrapper (Joe Bernit @ RAPID)
- Embark (Status.im)

## How It Works

ERC20 MetaTransaction uses the standard ERC20 specification (Fungible Token) interface, plus MetaTransaction support via a Proxy contract.

## Instructions

### Step 1 - Install

```
$ yarn install
```

### Step 2 - Configuration

Add private key to `.env` file.

```

contracts: {
  ERC20MetaTransaction: {
    // _name, _symbol, _decimals, _totalSupply
    args: ["MetaToken", "META", 1, 100000000]
  }
}

```

### Step 3 - Deploy

```
// Rinkeby
$ yarn deploy --rinkeby

// Kovan
$ yarn deploy --kovan

// Mainnet
$ yarn deploy --testnet
```

### Step 3 - Deploy
