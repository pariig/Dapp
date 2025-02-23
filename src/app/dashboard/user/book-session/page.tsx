
// "use client";

// import React, { useState, useEffect } from "react";
// import Web3 from "web3"; // Import Web3 library

// // Updated doctors array with 10 doctors, including their wallet addresses and years of experience
// const doctors = [
//   { 
//     id: 1, 
//     name: "Dr. Aryan Dixit", 
//     fee: 50, 
//     walletAddress: "0x1234abc5678def90123456789abcdef12345678", 
//     yearsOfExperience: 10,
//     image: "https://randomuser.me/api/portraits/men/40.jpg" 
//   },
//   { 
//     id: 2, 
//     name: "Dr. Namita Thapar", 
//     fee: 75, 
//     walletAddress: "0x2345bc6789efgh0123456789abcdef12345678", 
//     yearsOfExperience: 8,
//     image: "https://randomuser.me/api/portraits/women/45.jpg" 
//   },
//   { 
//     id: 3, 
//     name: "Dr. Peyush", 
//     fee: 100, 
//     walletAddress: "0x3456cd7890fghij123456789abcdef12345678", 
//     yearsOfExperience: 12,
//     image: "https://randomuser.me/api/portraits/men/32.jpg"
//   },
//   { 
//     id: 4, 
//     name: "Dr. Rahul Sharma", 
//     fee: 60, 
//     walletAddress: "0x4567de8901ijkl234567890abcdef12345678", 
//     yearsOfExperience: 9,
//     image: "https://media.istockphoto.com/id/179011088/photo/indian-doctor.jpg?s=612x612&w=0&k=20&c=EwRn1EWy79prCtdo8yHM6hvCVVcaKTznVBpVURPJxt4="
//   },
//   { 
//     id: 5, 
//     name: "Dr. Priya Verma", 
//     fee: 80, 
//     walletAddress: "0x5678ef9012lmno345678901abcdef12345678", 
//     yearsOfExperience: 7,
//     image: "https://randomuser.me/api/portraits/women/45.jpg" 
//   },
//   { 
//     id: 6, 
//     name: "Dr. Simran Kapoor", 
//     fee: 90, 
//     walletAddress: "0x6789fg0123mnop456789012abcdef12345678", 
//     yearsOfExperience: 5,
//     image: "https://randomuser.me/api/portraits/women/45.jpg" 
//   },
//   { 
//     id: 7, 
//     name: "Dr. Aarav Patel", 
//     fee: 110, 
//     walletAddress: "0x7890gh1234opqr567890123abcdef12345678", 
//     yearsOfExperience: 14,
//     image: "https://t3.ftcdn.net/jpg/03/05/69/00/360_F_305690038_kio1DI7qtf1kMPT4z6keI3GwB0zP6Sch.jpg"
//   },
//   { 
//     id: 8, 
//     name: "Dr. Richa Gupta", 
//     fee: 95, 
//     walletAddress: "0x8901hi2345pqrs678901234abcdef12345678", 
//     yearsOfExperience: 6,
//     image:"https://img.freepik.com/premium-photo/portrait-female-medical-worker-young-doctor-with-stethoscope_159057-449.jpg"
//   },
//   { 
//     id: 9, 
//     name: "Dr. Arjun Mehra", 
//     fee: 120, 
//     walletAddress: "0x9012ij3456rst678901234abcdef12345678", 
//     yearsOfExperience: 15,
//     image: "https://randomuser.me/api/portraits/men/40.jpg"
//   },
//   { 
//     id: 10, 
//     name: "Dr. Neha Saxena", 
//     fee: 130, 
//     walletAddress: "0x0123jk4567tuvw789012345abcdef12345678", 
//     yearsOfExperience: 18,
//     image:"https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg"
//   }
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
//         setAccount(accounts[0]);
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
//           to: selectedDoctor.walletAddress,
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
//       <h1 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">Find Your Therapist!</h1>
      
//       {selectedDoctor ? (
//         <div className="bg-white p-6 shadow-md rounded-lg text-gray-900">
//           <h2 className="text-2xl font-bold text-gray-900">{selectedDoctor.name}</h2>
//           {/* Display Doctor Image */}
//           <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-32 h-32 rounded-full mt-4" />
//           <p className="text-gray-600 mt-2">
//             <span className="font-semibold">Years of Experience:</span> {selectedDoctor.yearsOfExperience}
//           </p>
//           <p className="text-gray-600 mt-2">
//             <span className="font-semibold">Wallet Address:</span> {selectedDoctor.walletAddress}
//           </p>
//           <p className="text-green-600 font-medium text-lg mt-2">${selectedDoctor.fee} Fee</p>

//           <button
//             onClick={handlePayment}
//             className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-400 transition duration-300"
//           >
//             Pay and Book
//           </button>

//           {transactionHash && (
//             <div className="mt-4">
//               <p className="text-sm text-gray-700">Transaction Hash: <span className="font-semibold text-blue-500">{transactionHash}</span></p>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div className="bg-white p-6 shadow-md rounded-lg text-gray-900">
//           <h2 className="text-xl font-semibold text-gray-900">Choose a Doctor</h2>
//           <ul className="space-y-4 mt-4">
//             {doctors.map((doctor) => (
//               <li
//                 key={doctor.id}
//                 className="cursor-pointer p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
//                 onClick={() => handleDoctorSelection(doctor)}
//               >
//                 {/* Display Doctor Image */}
//                 <img src={doctor.image} alt={doctor.name} className="w-20 h-20 rounded-full mr-4 inline-block" />
//                 <div className="inline-block">
//                   <h3 className="font-semibold text-xl text-gray-800">{doctor.name}</h3>
//                   <p className="text-gray-600 mt-1">
//                     <span className="font-semibold">Experience:</span> {doctor.yearsOfExperience} years
//                   </p>
//                   <p className="text-gray-600">
//                     <span className="font-semibold">Wallet Address:</span> {doctor.walletAddress}
//                   </p>
//                   <p className="text-green-600 font-medium mt-1">${doctor.fee} Fee</p>
//                   <button
//                     onClick={() => handleDoctorSelection(doctor)}
//                     className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition duration-300"
//                   >
//                     Select and Pay
//                   </button>
//                 </div>
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
import Web3 from "web3";
import jsPDF from "jspdf";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/constants/contract";

const doctors = [
  { id: 1, name: "Dr. Aryan Dixit", walletAddress: "0xB754e259D0c483cD80D00fb4f143C6B8c2C8A685", yearsOfExperience: 10, image: "https://randomuser.me/api/portraits/men/40.jpg" },
  { id: 2, name: "Dr. Namita Thapar", walletAddress: "0x2345bc6789efgh0123456789abcdef12345678", yearsOfExperience: 8, image: "https://randomuser.me/api/portraits/women/45.jpg" },
  { id: 3, name: "Dr. Peyush", walletAddress: "0x3456cd7890fghij123456789abcdef12345678", yearsOfExperience: 12, image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 4, name: "Dr. Rahul Sharma", walletAddress: "0x4567de8901ijkl234567890abcdef12345678", yearsOfExperience: 9, image: "https://media.istockphoto.com/id/179011088/photo/indian-doctor.jpg?s=612x612&w=0&k=20&c=EwRn1EWy79prCtdo8yHM6hvCVVcaKTznVBpVURPJxt4=" },
  { id: 5, name: "Dr. Priya Verma", walletAddress: "0x5678ef9012lmno345678901abcdef12345678", yearsOfExperience: 7, image: "https://randomuser.me/api/portraits/women/45.jpg" }
];

export default function BookSession() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [fee, setFee] = useState("");
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [contract, setContract] = useState<any>(null);
  const [transactionHash, setTransactionHash] = useState<string | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptData, setReceiptData] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      window.ethereum.request({ method: "eth_requestAccounts" }).then((accounts: string[]) => {
        setAccount(accounts[0]);
        const contractInstance = new web3Instance.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        setContract(contractInstance);
      }).catch(err => console.log("Error requesting accounts:", err));
    } else {
      alert("Please install MetaMask to interact with Web3");
    }
  }, []);

  const handleDoctorSelection = (doctor: typeof doctors[0]) => {
    setSelectedDoctor(doctor);
    setShowPaymentModal(true);
  };

  const handlePayment = async () => {
    if (!web3 || !account || !selectedDoctor || !appointmentDate || !appointmentTime || !contract || !fee) {
      alert("⚠️ Please fill all fields before proceeding.");
      return;
    }
  
    try {
      const dateTime = Math.floor(new Date(`${appointmentDate}T${appointmentTime}`).getTime() / 1000);
      const amountInWei = web3.utils.toWei(fee.toString(), "ether");
  
      // Show a loading message
      alert("⏳ Processing your payment... Please wait.");
  
      const tx = await contract.methods.createAppointment(
        selectedDoctor.walletAddress,
        dateTime
      ).send({ from: account, value: amountInWei });
  
      setTransactionHash(tx.transactionHash);
      setReceiptData({
        doctorName: selectedDoctor.name,
        appointmentId: tx.transactionHash,
        amount: fee,
        date: appointmentDate,
        time: appointmentTime
      });
      setShowReceipt(true);
      
      alert("✅ Payment Successful! Transaction Hash: " + tx.transactionHash);
  
      // Close the payment modal after success
      setShowPaymentModal(false);
  
    } catch (error) {
      // ✅ Detect when user rejects the transaction
      if (error.code === 4001 || error.message.includes("User denied transaction signature")) {
        alert("❌ Payment Cancelled! You have rejected the transaction.");
      } 
      // ✅ Detect insufficient funds error
      else if (error.message.toLowerCase().includes("insufficient funds")) {
        alert("⚠️ Insufficient balance! Please ensure you have enough ETH.");
      } 
      // ✅ Any other unknown errors
      else {
        alert("⚠️ Payment failed! Please try again.");
      }
  
      // ✅ Log error but prevent red console errors
      console.warn("Handled Payment Error:", error.message || error);
  
      // ✅ Close modal even if payment is cancelled or fails
      setShowPaymentModal(false);
    }
  };
  const downloadReceipt = () => {
    if (receiptData) {
      const doc = new jsPDF();
      doc.text("Payment Receipt", 10, 10);
      doc.text(`Doctor: ${receiptData.doctorName}`, 10, 20);
      doc.text(`Appointment ID: ${receiptData.appointmentId}`, 10, 30);
      doc.text(`Amount: $${receiptData.amount}`, 10, 40);
      doc.text(`Date: ${receiptData.date}`, 10, 50);
      doc.text(`Time: ${receiptData.time}`, 10, 60);
      doc.save("Payment_Receipt.pdf");
    }
  };
  
  
  
  

  return (
    <div className="p-8 bg-gradient-to-br from-[#34e89e] to-[#0f3443] min-h-screen text-gray-300">
      <h1 className="text-2xl font-bold mb-6 text-white drop-shadow-lg text-center">Find Your Therapist!</h1>

      {/* Doctor Cards in Horizontal Format */}
      <div className="flex flex-col space-y-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white flex items-center p-6 shadow-md rounded-lg w-full max-w-3xl mx-auto">
            <img src={doctor.image} alt={doctor.name} className="w-24 h-24 rounded-full" />
            <div className="ml-6 flex-grow">
              <h3 className="font-bold text-xl text-gray-900">{doctor.name}</h3>
              <p className="text-gray-600">Experience: {doctor.yearsOfExperience} years</p>
            </div>
            <button
              onClick={() => handleDoctorSelection(doctor)}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-400 transition"
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>

      {/* Payment Pop-up Modal */}
      {showPaymentModal && selectedDoctor && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg relative w-96">
          
          {/* Close Button */}
          <button 
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            onClick={() => setShowPaymentModal(false)}
          >
            ❌
          </button>
      
          <h2 className="text-lg text-black font-semibold">Confirm Payment</h2>
          <p className="text-sm text-gray-600">Doctor: {selectedDoctor.name}</p>
          <p className="text-sm text-gray-600">Wallet Address: {selectedDoctor.walletAddress}</p>
      
          <label className="block mt-3 text-sm text-black font-medium">Enter Fee (ETH):</label>
          <input 
            type="number" 
            className="w-full border p-2 rounded mt-1" 
            value={fee} 
            onChange={(e) => setFee(e.target.value)} 
          />
      
          <label className="block mt-3 text-sm text-black font-medium">Select Appointment Date:</label>
          <input 
            type="date" 
            className="w-full border p-2 rounded mt-1" 
            value={appointmentDate} 
            onChange={(e) => setAppointmentDate(e.target.value)} 
          />
      
          <label className="block mt-3 text-sm text-black font-medium">Select Appointment Time:</label>
          <input 
            type="time" 
            className="w-full border p-2 rounded mt-1" 
            value={appointmentTime} 
            onChange={(e) => setAppointmentTime(e.target.value)} 
          />
      
          <button 
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-400 w-full"
            onClick={handlePayment}
          >
            Pay and Book
          </button>
      
        </div>
      </div>
      
      
      )}
       {showReceipt && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button className="absolute top-2 right-2 text-xl" onClick={() => setShowReceipt(false)}>✖</button>
            <h2 className="text-xl text-black font-semibold mb-2">Payment Receipt</h2>
            <p className="text-black"><strong>Doctor:</strong> {receiptData.doctorName}</p>
            <p className="text-black"><strong>Appointment ID:</strong> {receiptData.appointmentId}</p>
            <p className="text-black"><strong>Amount Paid:</strong> {receiptData.amount} ETH</p>
            <p className="text-black"><strong>Date:</strong> {receiptData.date}</p>
            <p className="text-black"><strong>Time:</strong> {receiptData.time}</p>
            <button onClick={downloadReceipt} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">Download as PDF</button>
          </div>
        </div>
      )}
    </div>
  );
}


