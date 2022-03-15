const MultisigWallet = artifacts.require("MultisigWallet");
const addresses = process.env.MULTISIG_ADDRESSES;
const required = process.env.REQUIRED;

module.exports = function (deployer) {
  deployer.deploy(MultisigWallet, addresses, required);
};
