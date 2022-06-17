
const hre = require("hardhat");

async function main() {

  
  const PolyPunkNFT = await hre.ethers.getContractFactory("PolyPunkNFT");
  const polyPunkNFT = await PolyPunkNFT.deploy();

  await polyPunkNFT.deployed();

  console.log("PolyPunkNFT deployed to:", polyPunkNFT.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
