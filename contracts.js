module.exports = {
  // default applies to all environments
  default: {
    // Blockchain node to deploy the contracts
    deployment: {
      host: "rinkeby.infura.io/v3/32fc6a7484e145929178ef407b1c606c", // Host of the blockchain node
      port: false,
      protocol: "https", // <=== must be specified for infura, can also be http, or ws
      accounts: [
        {
          privateKey:
            "1f12dd5b39522171cd9a2a868e7a43d2c86212f46f76d35818d59a7b55afd8a2"
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

    contracts: {
      ERC20Detailed: {
        args: ["DevToken", "DEV", 18, 1000000] // _name, _symbol, _decimals, _totalSupply
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
  testnet: {
    host: "rinkeby.infura.io/v3/32fc6a7484e145929178ef407b1c606c", // Host of the blockchain node
    port: false,
    protocol: "https", // <=== must be specified for infura, can also be http, or ws
    type: "rpc",
    strategy: "explicit",
    deploy: {
      ERC20Dev: {
        fromIndex: 0,
        args: ["DevToken", "DEV", 18, 1000000] // _name, _symbol, _decimals, _totalSupply
      }
    }
  },
  privatenet: {},
  livenet: {}
};
