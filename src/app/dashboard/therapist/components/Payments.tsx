"use client";
import React, { useState, useEffect } from "react";
import Web3 from "web3"; // Import Web3 library

// Assume these are the transaction details fetched from a blockchain smart contract or an API.
const initialTransactions = [
  { id: 1, patient: "Sanskar Garg", amount: "$50", date: "March 5, 2024", transactionHash: "0x1234...abcd" },
  { id: 2, patient: "Tarun Garg", amount: "$75", date: "March 6, 2024", transactionHash: "0x5678...efgh" },
];

const Payments = () => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [account, setAccount] = useState<string | null>(null);

  // Initialize Web3 instance and set up the wallet address
  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      window.ethereum.request({ method: "eth_requestAccounts" }).then((accounts: string[]) => {
        setAccount(accounts[0]); // Set the account from the wallet
      }).catch(err => console.log("Error requesting accounts:", err));
    } else {
      alert("Please install MetaMask to interact with Web3");
    }
  }, []);

  // Function to check transaction status (for example, from the blockchain)
  const checkTransactionStatus = async (transactionHash: string) => {
    if (web3) {
      try {
        const receipt = await web3.eth.getTransactionReceipt(transactionHash);
        if (receipt && receipt.status) {
          return "Completed";
        } else {
          return "Failed";
        }
      } catch (err) {
        console.log("Error checking transaction status:", err);
        return "Unknown";
      }
    }
    return "Unknown";
  };

  return (
    <div className="p-8 bg-gradient-to-br from-[#34e89e] to-[#0f3443] min-h-screen text-gray-300">
      <h1 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">Payments</h1>
      <div className="bg-white p-6 shadow-md rounded-lg text-gray-900">
        {transactions.length > 0 ? (
          transactions.map((payment) => (
            <div key={payment.id} className="border-b py-4">
              <h2 className="text-lg font-semibold text-black">{payment.patient}</h2>
              <p className="text-gray-700">{payment.date}</p>
              <span className="text-green-600 font-medium">{payment.amount}</span>
              
              {/* Display the transaction hash and check its status */}
              <div className="mt-2">
                <p className="text-sm text-gray-500">Transaction Hash: {payment.transactionHash}</p>
                <button
                  onClick={async () => {
                    const status = await checkTransactionStatus(payment.transactionHash);
                    alert(`Transaction Status: ${status}`);
                  }}
                  className="mt-2 bg-white text-[#02180f] px-4 py-1 rounded-md hover:bg-gray-200 transition duration-300"
                >
                  Check Status
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No transactions yet.</p>
        )}
      </div>
    </div>
  );
};

export default Payments;
