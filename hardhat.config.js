// hardhat.config.js
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 1337
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/WwOzwGSBtyRSL2o0sFX4AFEGbyJ1tfXV",
      //private key in accounts
      accounts: [
        `0896218034e7d1572574977f240ae65a4b5aa2974f663e04958c53638f66f06a`,
      ],
    },
  }
};

// 0x5FbDB2315678afecb367f032d93F642f64180aa3

// 0xFF63c930946b997f697aAE634e83bD85B17Aa752