module.exports = {
  // default applies to all environments
  default: {
    // Blockchain node to deploy the contracts
    deployment: {
      host: `rinkeby.infura.io/v3/${process.env.InfuraAPIKey}`, // Host of the blockchain node
      port: false,
      protocol: "https", // <=== must be specified for infura, can also be http, or ws
      accounts: [
        {
          privateKey: process.env.PrivateKey
        }
      ]
    },
    // order of connections the dapp should connect to
    dappConnection: [
      "$WEB3", // uses pre existing web3 object if available (e.g in Mist)
      "ws://localhost:8546",
      "http://localhost:8545"
    ],

    gas: "auto",
    strategy: "explicit",
    contracts: {
      ERC20MetaTransaction: {
        // _name, _symbol, _decimals, _totalSupply
        args: ["MetaToken", "META", 1, 100000000]
      }
    }
  },

  // default environment, merges with the settings in default
  // assumed to be the intended environment by `embark run`
  development: {
    dappConnection: [
      "ws://localhost:8546",
      "http://localhost:8545",
      "$WEB3" // uses pre existing web3 object if available (e.g in Mist)
    ]
  },
  rinkeby: {
    host: `rinkeby.infura.io/v3/${process.env.InfuraAPIKey}`,
    port: false,
    protocol: "https", // <=== must be specified for infura, can also be http, or ws
    type: "rpc",
    strategy: "explicit",
    deploy: {
      ERC20MetaTransaction: {
        // _name, _symbol, _decimals, _totalSupply
        args: ["MetaToken", "META", 1, 100000000]
      }
    }
  },
  kovan: {
    host: `kovan.infura.io/v3/${process.env.InfuraAPIKey}`,
    port: false,
    protocol: "https", // <=== must be specified for infura, can also be http, or ws
    type: "rpc",
    strategy: "explicit",
    deploy: {
      ERC20MetaTransaction: {
        // _name, _symbol, _decimals, _totalSupply
        args: ["MetaToken", "META", 1, 100000000]
      }
    }
  },
  privatenet: {},
  livenet: {}
};
