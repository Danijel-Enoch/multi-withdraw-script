const {ethers} = require("ethers");
const abi=require("./abi.json")


const admin_wallet_private_key=""
const usdt_address=""
for (let index = 0; index < array.length; index++) {
    //const element = array[index];
   const wallet= new ethers.Wallet("Admin private KEy")
const provider = wallet.provider
const signer = provider.getSigner()
const usdt_contract_with_provider = new ethers.Contract(usdt_address, abi, provider);
const usdt_contract_with_signer = new ethers.Contract(usdt_address, abi, signer);
balance = await usdt_contract_with_provider.balanceOf("list of address")
//balance to be recieved in hex
const amount=ethers.BigNumber.from( balance )
const to=wallet.publicKey;
balance = await daiContract.transferFrom(from,to,amount)
}