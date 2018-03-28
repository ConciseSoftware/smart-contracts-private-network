var text = 'Hello World'
var helloContract = web3.eth.contract([{
  'constant': true,
  'inputs': [],
  'name': 'showText',
  'outputs': [{'name': '', 'type': 'string'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{'name': 'text', 'type': 'string'}],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'constructor'
}])

var hello = helloContract.new(
  text, {
    from: web3.eth.accounts[0],
    data: '0x<BIN DATA>',
    gas: '2100000'
  }, function (e, contract) {
    console.log(e, contract)
    if (typeof contract.address !== 'undefined') {
      console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash)
    }
  })
