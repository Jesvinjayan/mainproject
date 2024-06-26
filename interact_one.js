/*const { Web3 } = require('web3');
const web3 = new Web3('HTTP://127.0.0.1:7545'); // Note the lowercase 'http'
const contractAddress = '0x14d4d457fc88f39B2906fA4f422Bc4b2492D1f3a';
const privateKey = '0xc3a963d934538007e427cad6c2d1ae33d082feff90508c3cf936ca71ee837524';
const fromAddress = '0x904062Ac2Ee4073F610c01952018E85AcDB99953'; // Replace with the actual from address
*/

const { Web3 } = require('web3');
const web3 = new Web3('HTTP://127.0.0.1:7545');
// Replace with your deployed contract address
const contractAddress = '0xA852AC8148741CFfBF1A0e5c3cF93c88ff2356FF';

// Replace with the ABI of your contract
const contractABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "jsonData",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "storeData",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllData",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "internalType": "struct SimpleStorage.MyData[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "jsonDataLength",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getPath",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function",
    "constant": true
  }
];
// Create a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Example function to call the setData function on your contract


// Function to store data in the smart contract
async function storeData(name) {
  try {
      const data = await contract.methods.getAllData().call();
      const fromAccount = '0xF5AF1d3C9E7b969e258D2738b511d6E4Fe917425';
      //console.log('All Data:', data);
      id = Object.keys(data).length;
      // Call the storeData function on the contract and specify the data values
      const transaction = await contract.methods.storeData(id, name).send({ from: fromAccount });
      
      //console.log('Data stored in contract. Transaction Hash:', transaction.transactionHash);
  } catch (error) {
      console.error('Error storing data:', error);
  }
}

// Function to retrieve all data from the smart contract
async function getAllData() {
  try {
      // Call the getAllData function on the contract to retrieve all data
      const data = await contract.methods.getAllData().call();

      return data;
  } catch (error) {
      console.error('Error retrieving data:', error);
  }

}

async function getPath() {
  // Call the getJeswin function from your contract.
  const result = await contract.methods.getPath().call();
  return result; // This will log "jeswin" to the console.
}


 (async () => {
  await storeData('81');
  var jen = await getAllData();
    console.log(jen);
    var k = await getPath();
    console.log(k);
  })();