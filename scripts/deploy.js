const { ethers } = require("hardhat");

async function main() {
  const StudentRegistry = await ethers.getContractFactory("StudentRegistry");
  const studentRegistry = await StudentRegistry.deploy();

  await studentRegistry.deployed();
  
  console.log("StudentRegistry deployed to:", studentRegistry.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
