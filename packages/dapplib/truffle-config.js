require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe strike rival pitch minor grid civil army genius'; 
let testAccounts = [
"0xd965035eef507be201fe7821c2a595d08ece8d0192b159e7d2395cb0ff4645a2",
"0x6821770f6a6c1af29192cce406ec864c317f86bd88b1c623f90c3ae25f8b8a44",
"0x822cca6b41fa4fcd498ca14026e928c7633d02e706e2356469f4b6c246b3d753",
"0x67e5b6481bd6c5d14f6d317b282dc5e5deea7e3e93b56b4b9865d801f6989478",
"0x40616b954fbaec8ac6e245f648ff2503a5fe8dee2f06c7957a2f084cdc895726",
"0xab158f90013c728357628aa1559336c2e5b99956e082d8443e796b994f70a10e",
"0x7ceb70da341646912ce980648e07f2c47c536f9289890b0914d8d287fa038757",
"0x34a5a5bb2e1ad20174f362dd5df91a488399ded4a3e47dc0ca7efab691e82d25",
"0x1acf949c3c17d8b4eb8a953c0ba7b72fe0d7171fea46cf41b65a52e7e3762bae",
"0xd3d8bbb367ccb6146d1967328e61c2bbcf55cd178bf49d8a538935485688ae62"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

