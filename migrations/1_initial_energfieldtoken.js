// Make sure the EnergyFieldToken contract is included by requireing it.
const EnergyFieldToken = artifacts.require("EnergyFieldToken");

// This is an async function, it will accept the Deployer account, the network, and eventual accounts.
module.exports = async function (deployer, network, accounts) {
  // await while we deploy the EnergyFieldToken
  await deployer.deploy(EnergyFieldToken, "EnergyFieldToken", "SSPT", 18, 5000000);
  const energyFieldToken = await EnergyFieldToken.deployed()
};