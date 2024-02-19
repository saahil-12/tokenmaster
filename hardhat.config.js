require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "sepolia",
  networks: {
    localhost: {
      url: "http://localhost:3000/",
    },
    hardhat: {}, 
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      chainId: 80001,
      gasPrice: 20000000000, // Adjust the gasPrice as needed for your tests
      accounts: { mnemonic: mnemonic },
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: "auto",
      accounts: { mnemonic: mnemonic },
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/WwOzwGSBtyRSL2o0sFX4AFEGbyJ1tfXV",
      //private key in accounts
      accounts: [
        `0896218034e7d1572574977f240ae65a4b5aa2974f663e04958c53638f66f06a`,
      ],
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: { mnemonic: mnemonic },
    },
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com/
    // apiKey: "G2PQQ9KTX12QTRZ5TMSNHZ4PKM4SGW7639",//bnb
    // apiKey: "7XBNM7I42PJW8NP8GDT1475CTC6BRBAXMZ",//polygon
    // J6XX5W1D135S9Y9HQ5RNFCXSTZE4N5H1NJ
    apiKey: "J6XX5W1D135S9Y9HQ5RNFCXSTZE4N5H1NJ",
  },
};

const { mnemonic } = require("./secrets.json");
