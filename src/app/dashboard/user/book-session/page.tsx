
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
  const [ethPriceInInr, setEthPriceInInr] = useState(null);




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
  useEffect(() => {
    const fetchEthPrice = async () => {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr");
        const data = await response.json();
        setEthPriceInInr(data.ethereum.inr);  // Store ETH price in INR
      } catch (error) {
        console.error("Error fetching ETH price:", error);
      }
    };
  
    fetchEthPrice();
  }, []);

  const handleDoctorSelection = (doctor: typeof doctors[0]) => {
    setSelectedDoctor(doctor);
    setShowPaymentModal(true);
  };
  //reciept
  const downloadReceipt = () => {
    if (receiptData) {
      const doc = new jsPDF();
  
      doc.setFontSize(16);
      doc.text("Payment Receipt", 10, 10);
      
      doc.setFontSize(12);
      doc.text(`Doctor: ${receiptData.doctorName}`, 10, 20);
      doc.text(`Appointment ID: ${receiptData.appointmentId}`, 10, 30);
      doc.text(`Amount Paid: ₹${receiptData.amountInINR} (≈ ${receiptData.amountInETH} ETH)`, 10, 40);
      doc.text(`Date: ${receiptData.date}`, 10, 50);
      doc.text(`Time: ${receiptData.time}`, 10, 60);
  
      // Save the receipt as a PDF
      doc.save(`Payment_Receipt_${receiptData.appointmentId}.pdf`);
    }
  };
  
//handleerror
  const handlePayment = async () => {
    if (!web3 || !account || !selectedDoctor || !appointmentDate || !appointmentTime || !contract || !fee) {
      alert("⚠️ Please fill all fields before proceeding.");
      return;
    }
  
    try {
      const dateTime = Math.floor(new Date(`${appointmentDate}T${appointmentTime}`).getTime() / 1000);
  
      // Convert INR to ETH (Assume you already fetched exchangeRate)
      const inrAmount = parseFloat(fee); // User input INR
      const exchangeRate = 0.0000041; // Example: 1 INR = 0.0000041 ETH (Fetch live rate)
      const convertedEth = (inrAmount * exchangeRate).toFixed(6); // ETH equivalent
      const amountInWei = web3.utils.toWei(convertedEth, "ether");
  
      // Show a loading message
      alert("⏳ Processing your payment... Please wait.");
  
      const tx = await contract.methods.createAppointment(
        selectedDoctor.walletAddress,
        dateTime
      ).send({ from: account, value: amountInWei });
  
      setTransactionHash(tx.transactionHash);
      alert("✅ Payment Successful! Transaction Hash: " + tx.transactionHash);
  
      // 📌 Store Receipt Data for Pop-up and Download
      setReceiptData({
        doctorName: selectedDoctor.name,
        appointmentId: tx.transactionHash.slice(0, 10), // Shortened ID
        amountInINR: inrAmount, // Store INR amount
        amountInETH: convertedEth, // Store ETH amount
        date: appointmentDate,
        time: appointmentTime,
      });
  
      setShowReceipt(true); // Show receipt pop-up
      setShowPaymentModal(false); // Close payment modal
    } catch (error) {
      if (error.code === 4001 || error.message.includes("User denied transaction signature")) {
        alert("❌ Payment Cancelled! You have rejected the transaction.");
      } else if (error.message.toLowerCase().includes("insufficient funds")) {
        alert("⚠️ Insufficient balance! Please ensure you have enough ETH.");
      } else {
        alert("⚠️ Payment failed! Please try again.");
      }
  
      console.warn("Handled Payment Error:", error.message || error);
      setShowPaymentModal(false);
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
      <p className="text-sm text-gray-600"><strong>Doctor:</strong> {selectedDoctor.name}</p>
      <p className="text-sm text-gray-600"><strong>Wallet Address:</strong> {selectedDoctor.walletAddress}</p>

      {/* Fee Input in INR */}
      <label className="block mt-3 text-sm text-black font-medium">Enter Fee (INR):</label>
      <input 
        type="number" 
        className="w-full border p-2 rounded mt-1 text-black" 
        value={fee} 
        onChange={(e) => setFee(e.target.value)} 
        placeholder="Enter amount in INR"
      />
      
      {/* Converted ETH Amount Display */}
      <p className="text-sm text-gray-600 mt-1">
        ≈ {fee && ethPriceInInr ? (fee / ethPriceInInr).toFixed(6) : "..."} ETH
      </p>

      {/* Appointment Date */}
      <label className="block mt-3 text-sm text-black font-medium">Select Appointment Date:</label>
      <input 
        type="date" 
        className="w-full border p-2 rounded mt-1 text-black" 
        value={appointmentDate} 
        onChange={(e) => setAppointmentDate(e.target.value)} 
      />

      {/* Appointment Time */}
      <label className="block mt-3 text-sm text-black font-medium">Select Appointment Time:</label>
      <input 
        type="time" 
        className="w-full border p-2 rounded mt-1 text-black" 
        value={appointmentTime} 
        onChange={(e) => setAppointmentTime(e.target.value)} 
      />

      {/* Pay Button */}
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
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative max-w-full overflow-hidden">
      
      {/* Close Button */}
      <button 
        className="absolute top-2 right-2 text-xl" 
        onClick={() => setShowReceipt(false)}
      >
        ✖
      </button>

      <h2 className="text-xl text-black font-semibold mb-2 text-center">Payment Receipt</h2>

      <div className="text-black space-y-2 break-words overflow-auto max-h-80">
        <p><strong>Doctor:</strong> {receiptData.doctorName}</p>
        <p className="truncate"><strong>Appointment ID:</strong> {receiptData.appointmentId}</p>
        <p><strong>Amount Paid:</strong> {receiptData.amountInINR} ETH</p>
        <p><strong>Date:</strong> {receiptData.date}</p>
        <p><strong>Time:</strong> {receiptData.time}</p>
      </div>

      <button 
        onClick={downloadReceipt} 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 w-full"
      >
        Download as PDF
      </button>

    </div>
  </div>
)}

    </div>
  );
}


