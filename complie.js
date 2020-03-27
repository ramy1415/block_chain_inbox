const path = require('path');
const fs = require('fs');
const solc = require('solc');
const fileName = 'inbox.sol';

const InboxPath = path.resolve(__dirname,'contracts','inbox.sol')
const source = fs.readFileSync(InboxPath,'utf8')

const input = {
    language: 'Solidity',
    sources: {
      [fileName]: {
        content: source
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['abi','evm.bytecode']
        }
      }
    }
  };
  var output = JSON.parse(solc.compile(JSON.stringify(input)));
  console.log(output.contracts[fileName].Inbox.evm.bytecode.object)
  console.log(output.contracts[fileName].Inbox.abi)

  module.exports = {
    abi:output.contracts[fileName].Inbox.evm.bytecode.object,
    bytecode:output.contracts[fileName].Inbox.abi
}
