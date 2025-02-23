// "use client";

// import React, { useState, useEffect } from "react";
// import Web3 from "web3"; // Import Web3 library

// const doctors = [
//   { id: 1, name: "Dr. Aryan Dixit", fee: 50, description: "General Practitioner" },
//   { id: 2, name: "Dr. Namita Thapar", fee: 75, description: "Specialist in Pediatrics" },
//   { id: 3, name: "Dr. Peyush", fee: 100, description: "Cardiologist" },
// ];

// export default function BookSession() {
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [web3, setWeb3] = useState<Web3 | null>(null);
//   const [account, setAccount] = useState<string | null>(null);
//   const [transactionHash, setTransactionHash] = useState<string | null>(null);

//   useEffect(() => {
//     if (window.ethereum) {
//       const web3Instance = new Web3(window.ethereum);
//       setWeb3(web3Instance);
//       window.ethereum.request({ method: "eth_requestAccounts" }).then((accounts: string[]) => {
//         setAccount(accounts[0]); // Set the account from the wallet
//       }).catch(err => console.log("Error requesting accounts:", err));
//     } else {
//       alert("Please install MetaMask to interact with Web3");
//     }
//   }, []);

//   const handleDoctorSelection = (doctor: typeof doctors[0]) => {
//     setSelectedDoctor(doctor);
//   };

//   const handlePayment = async () => {
//     if (web3 && account && selectedDoctor) {
//       const amountInEther = web3.utils.toWei(selectedDoctor.fee.toString(), "ether");

//       try {
//         const transaction = await web3.eth.sendTransaction({
//           from: account,
//           to: "0xYourContractAddressHere", // Replace with your contract address or a designated wallet
//           value: amountInEther,
//         });

//         setTransactionHash(transaction.transactionHash);
//       } catch (error) {
//         console.error("Payment failed:", error);
//       }
//     }
//   };

//   return (
//     <div className="p-8 bg-gradient-to-br from-[#34e89e] to-[#0f3443] min-h-screen text-gray-300">
//       <h1 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">Book a Session</h1>
      
//       {selectedDoctor ? (
//         <div className="bg-white p-6 shadow-md rounded-lg text-gray-900">
//           <h2 className="text-lg font-semibold">{selectedDoctor.name}</h2>
//           <p>{selectedDoctor.description}</p>
//           <p className="text-green-600 font-medium">${selectedDoctor.fee} Fee</p>

//           <button
//             onClick={handlePayment}
//             className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-400 transition duration-300"
//           >
//             Pay and Book
//           </button>

//           {transactionHash && (
//             <div className="mt-4">
//               <p className="text-sm">Transaction Hash: {transactionHash}</p>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div className="bg-white p-6 shadow-md rounded-lg text-gray-900">
//           <h2 className="text-xl font-semibold">Choose a Doctor</h2>
//           <ul className="space-y-4 mt-4">
//             {doctors.map((doctor) => (
//               <li
//                 key={doctor.id}
//                 className="cursor-pointer p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
//                 onClick={() => handleDoctorSelection(doctor)}
//               >
//                 <h3 className="font-semibold">{doctor.name}</h3>
//                 <p>{doctor.description}</p>
//                 <p className="text-green-600 font-medium">${doctor.fee} Fee</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import Web3 from "web3"; // Import Web3 library

// Updated doctors array with 10 doctors, including their wallet addresses and years of experience
const doctors = [
  { 
    id: 1, 
    name: "Dr. Aryan Dixit", 
    fee: 50, 
    walletAddress: "0x1234abc5678def90123456789abcdef12345678", 
    yearsOfExperience: 10,
    image: "https://randomuser.me/api/portraits/men/40.jpg" 
  },
  { 
    id: 2, 
    name: "Dr. Namita Thapar", 
    fee: 75, 
    walletAddress: "0x2345bc6789efgh0123456789abcdef12345678", 
    yearsOfExperience: 8,
    image: "https://randomuser.me/api/portraits/women/45.jpg" 
  },
  { 
    id: 3, 
    name: "Dr. Peyush", 
    fee: 100, 
    walletAddress: "0x3456cd7890fghij123456789abcdef12345678", 
    yearsOfExperience: 12,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  { 
    id: 4, 
    name: "Dr. Rahul Sharma", 
    fee: 60, 
    walletAddress: "0x4567de8901ijkl234567890abcdef12345678", 
    yearsOfExperience: 9,
    image: "https://media.istockphoto.com/id/179011088/photo/indian-doctor.jpg?s=612x612&w=0&k=20&c=EwRn1EWy79prCtdo8yHM6hvCVVcaKTznVBpVURPJxt4="
  },
  { 
    id: 5, 
    name: "Dr. Priya Verma", 
    fee: 80, 
    walletAddress: "0x5678ef9012lmno345678901abcdef12345678", 
    yearsOfExperience: 7,
    image: "https://randomuser.me/api/portraits/women/45.jpg" 
  },
  { 
    id: 6, 
    name: "Dr. Simran Kapoor", 
    fee: 90, 
    walletAddress: "0x6789fg0123mnop456789012abcdef12345678", 
    yearsOfExperience: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg" 
  },
  { 
    id: 7, 
    name: "Dr. Aarav Patel", 
    fee: 110, 
    walletAddress: "0x7890gh1234opqr567890123abcdef12345678", 
    yearsOfExperience: 14,
    image: "https://t3.ftcdn.net/jpg/03/05/69/00/360_F_305690038_kio1DI7qtf1kMPT4z6keI3GwB0zP6Sch.jpg"
  },
  { 
    id: 8, 
    name: "Dr. Richa Gupta", 
    fee: 95, 
    walletAddress: "0x8901hi2345pqrs678901234abcdef12345678", 
    yearsOfExperience: 6,
    image:"https://img.freepik.com/premium-photo/portrait-female-medical-worker-young-doctor-with-stethoscope_159057-449.jpg"
  },
  { 
    id: 9, 
    name: "Dr. Arjun Mehra", 
    fee: 120, 
    walletAddress: "0x9012ij3456rst678901234abcdef12345678", 
    yearsOfExperience: 15,
    image: "https://randomuser.me/api/portraits/men/40.jpg"
  },
  { 
    id: 10, 
    name: "Dr. Neha Saxena", 
    fee: 130, 
    walletAddress: "0x0123jk4567tuvw789012345abcdef12345678", 
    yearsOfExperience: 18,
    image:"https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg"
  }
];


export default function BookSession() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [transactionHash, setTransactionHash] = useState<string | null>(null);

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      window.ethereum.request({ method: "eth_requestAccounts" }).then((accounts: string[]) => {
        setAccount(accounts[0]);
      }).catch(err => console.log("Error requesting accounts:", err));
    } else {
      alert("Please install MetaMask to interact with Web3");
    }
  }, []);

  const handleDoctorSelection = (doctor: typeof doctors[0]) => {
    setSelectedDoctor(doctor);
  };

  const handlePayment = async () => {
    if (web3 && account && selectedDoctor) {
      const amountInEther = web3.utils.toWei(selectedDoctor.fee.toString(), "ether");

      try {
        const transaction = await web3.eth.sendTransaction({
          from: account,
          to: selectedDoctor.walletAddress,
          value: amountInEther,
        });

        setTransactionHash(transaction.transactionHash);
      } catch (error) {
        console.error("Payment failed:", error);
      }
    }
  };

  return (
    <div className="p-8 bg-gradient-to-br from-[#34e89e] to-[#0f3443] min-h-screen text-gray-300">
      <h1 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">Find Your Therapist!</h1>
      
      {selectedDoctor ? (
        <div className="bg-white p-6 shadow-md rounded-lg text-gray-900">
          <h2 className="text-2xl font-bold text-gray-900">{selectedDoctor.name}</h2>
          {/* Display Doctor Image */}
          <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-32 h-32 rounded-full mt-4" />
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Years of Experience:</span> {selectedDoctor.yearsOfExperience}
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Wallet Address:</span> {selectedDoctor.walletAddress}
          </p>
          <p className="text-green-600 font-medium text-lg mt-2">${selectedDoctor.fee} Fee</p>

          <button
            onClick={handlePayment}
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-400 transition duration-300"
          >
            Pay and Book
          </button>

          {transactionHash && (
            <div className="mt-4">
              <p className="text-sm text-gray-700">Transaction Hash: <span className="font-semibold text-blue-500">{transactionHash}</span></p>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white p-6 shadow-md rounded-lg text-gray-900">
          <h2 className="text-xl font-semibold text-gray-900">Choose a Doctor</h2>
          <ul className="space-y-4 mt-4">
            {doctors.map((doctor) => (
              <li
                key={doctor.id}
                className="cursor-pointer p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                onClick={() => handleDoctorSelection(doctor)}
              >
                {/* Display Doctor Image */}
                <img src={doctor.image} alt={doctor.name} className="w-20 h-20 rounded-full mr-4 inline-block" />
                <div className="inline-block">
                  <h3 className="font-semibold text-xl text-gray-800">{doctor.name}</h3>
                  <p className="text-gray-600 mt-1">
                    <span className="font-semibold">Experience:</span> {doctor.yearsOfExperience} years
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Wallet Address:</span> {doctor.walletAddress}
                  </p>
                  <p className="text-green-600 font-medium mt-1">${doctor.fee} Fee</p>
                  <button
                    onClick={() => handleDoctorSelection(doctor)}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition duration-300"
                  >
                    Select and Pay
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

