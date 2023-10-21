// JavaScript e Blockchain

// JavaScript pode ser usado para interagir com blockchains, como criar e gerenciar carteiras de criptomoedas ou contratos inteligentes.


// Exemplo usando a biblioteca ethers.js para interagir com a blockchain Ethereum
const { ethers } = require("ethers");

async function consultarSaldo() {
    const provedor = new ethers.providers.EtherscanProvider();
    const saldo = await provedor.getBalance("endereço-da-carteira");
    console.log(ethers.utils.formatEther(saldo));
}

consultarSaldo();