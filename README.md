Smart Contract Example + Private Network
========================================

# How to run

* Operation System: Linux Kubuntu 16.04

## Needed tools

* [Geth & Tools](https://geth.ethereum.org/downloads/)
* Node & NPM - can be installed with [Node Version Manager](https://github.com/creationix/nvm)

## Geth & Tools installation (v1.8.3)
```
wget https://gethstore.blob.core.windows.net/builds/geth-alltools-linux-amd64-1.8.3-329ac18e.tar.gz
tar -xzvf geth-alltools-linux-amd64-1.8.3-329ac18e.tar.gz
mv geth-alltools-linux-amd64-1.8.3-329ac18e/bootnode .
mv geth-alltools-linux-amd64-1.8.3-329ac18e/geth .
rm -rf geth-alltools-linux-amd64-1.8.3-329ac18e
rm -rf geth-alltools-linux-amd64-1.8.3-329ac18e.tar.gz
```

## Private network

```
./bootnode --genkey node.key
./geth --datadir=./ethereum account new
./geth --datadir=./ethereum --networkid 2456 --nodekey node.key init genesis.json
./geth --datadir=./ethereum --networkid 2456 --nodekey node.key --mine --minerthreads 1
```

## Compilation

```
npm install -g solc
solcjs Hello.sol --bin
solcjs Hello.sol --abi
```

## Geth

```
./geth attach --datadir=./ethereum
```

## Unlock Ethereum account - Geth client

```
> personal.unlockAccount(eth.coinbase, '12345678', 0)
```

## Load script
Before load: edit deploy.js and replace \<BIN DATA\> with code from Hello_sol_Hello.bin

```
> loadScript("deploy.js")
```

## Execute Smart Contract

```
> var hello = eth.contract([{"constant":true,"inputs":[],"name":"showText","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"text","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]).at("0x1fbc3e8b42f9b9ea7ca3df8057f47c2d58226e00")
> hello.showText()
```
