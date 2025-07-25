import { ethers } from "ethers";

const wallet = ethers.Wallet.createRandom();

console.log("Dirección pública:", wallet.address);
console.log("Clave privada:", wallet.privateKey);
console.log("Frase secreta:", wallet.mnemonic?.phrase);

