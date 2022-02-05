const path = require('path');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "vapp/src/contracts"),

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    
    live: {
      network_id: 1,
      host: "127.0.0.1",
      port: 8546   // Different than the default below
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.8",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {   
               // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 1500

        },
        
        evmVersion: "constantinople"
      }
    },
  },

  //Deploying to the Live Network
  rpc: {
    host: "127.0.0.1",
    port: 8545
  }

};
