/*const { Web3 } = require('web3');
const web3 = new Web3('HTTP://127.0.0.1:7545'); // Note the lowercase 'http'
const contractAddress = '0x14d4d457fc88f39B2906fA4f422Bc4b2492D1f3a';
const privateKey = '0xc3a963d934538007e427cad6c2d1ae33d082feff90508c3cf936ca71ee837524';
const fromAddress = '0x904062Ac2Ee4073F610c01952018E85AcDB99953'; // Replace with the actual from address
*/

const { Web3 } = require('web3');
const web3 = new Web3('HTTP://127.0.0.1:7545');
// Replace with your deployed contract address
const contractAddress = '0x0B3dAc4486A3006A418ba8cF9c78A3d8D518Ef22';

// Replace with the ABI of your contract
const contractABI = [
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
        "internalType": "struct appen.MyData[]",
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
  }
];
// Create a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Example function to call the setData function on your contract


// Function to store data in the smart contract
async function storeData(name) {
  try {
      const data = await contract.methods.getAllData().call();
      const fromAccount = '0xE71Cd5811b79F5a1c288200Cd1AA03296d6B1917';
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
 (async () => {
  await storeData('89');
  var jen = await getAllData();
    console.log(jen);
  })();