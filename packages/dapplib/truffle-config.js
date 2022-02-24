require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn purity install battle bottom skate'; 
let testAccounts = [
"0x668dda927f75cfbe955d336155a1daf42fd7032eadf52a66b906636baeff16d2",
"0xf551bc9531d7d79e395a57782e7b53dd2296ee0461cdc42a6fd51a2eb04d708a",
"0x7c76d4a321fc8e3dd9ead5a794549d689668902832282586d62330ca63952221",
"0x38d55d1a4e0ca65247f8c013889899a5420fc0d63c1b6b7f1d2ad9a5f19051c1",
"0xa5576484d326d19e1bcb3e7e324a3062d7fa0b3a5ba55978f5f46a52695242b1",
"0xcb54f5d5da7a6ab14ac1dd8f3c4b523ee7af6ab8bd8dcc2030eb8d63c4c81454",
"0xa6c0d5f569c263575c5b579467f4b57e3dd18978a4e6569537180d343838e84c",
"0x41a11cbaa5a0d04b24a977c51f27a598118270c9d09cd97b138a7c2aa7f43156",
"0xc71c90dcceba6ed40dab989e8b870feb42057282f7a4b28f885225d98b427097",
"0x8741920f61fee203b4a0649062d9b9f22613fc7a297090beb6f8830790f4d62f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


