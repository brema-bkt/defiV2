require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-truffle5');
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {version: '0.6.6', settings: {
          optimizer: {
            enabled: true,
            runs: 1
          }
        }}
    ]

  },
  networks: {
    arbitrum: {
      url: 'https://arb1.arbitrum.io/rpc',
      accounts: [''],
      blockGasLimit: '1000000000',
      allowUnlimitedContractSize: true
    }
  },
  etherscan: {
    apiKey: ''
  }
};