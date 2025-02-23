"use client";
import React, { useState } from "react";

interface Appointment {
  id: number;
  clientName: string;
  date: string;
  time: string;
  status: "Upcoming" | "Completed" | "Cancelled";
  paymentStatus?: "Pending" | "Completed";
}

const initialAppointments: Appointment[] = [
  { id: 1, clientName: "Parth", date: "2025-02-20", time: "10:00 AM", status: "Upcoming" },
  { id: 2, clientName: "Aanya Bansal", date: "2025-02-21", time: "02:30 PM", status: "Upcoming" },
  { id: 3, clientName: "Riya Gupta", date: "2025-02-22", time: "04:00 PM", status: "Upcoming" },
];

export default function Appointments() {
  const [appointments, setAppointments] = useState(initialAppointments);

  // Function to update appointment status
  const updateStatus = (id: number, newStatus: "Completed" | "Cancelled") => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === id ? { ...appt, status: newStatus } : appt
      )
    );
  };

  // Function to mark appointment as paid
  const markAsPaid = (id: number) => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === id && appt.status === "Completed"
          ? { ...appt, paymentStatus: "Completed" }
          : appt
      )
    );
  };

  return (
    <div className="p-8 bg-teal-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-teal-900">Appointments</h1>

      {appointments.length === 0 ? (
        <p className="text-gray-600">No upcoming appointments.</p>
      ) : (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-teal-200 text-teal-900">
                <th className="border p-4">Client</th>
                <th className="border p-4">Date</th>
                <th className="border p-4">Time</th>
                <th className="border p-4">Status</th>
                <th className="border p-4">Payment Status</th>
                <th className="border p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id} className="border hover:bg-teal-50 transition">
                  <td className="border p-4 text-gray-800">{appt.clientName}</td>
                  <td className="border p-4 text-gray-600">{appt.date}</td>
                  <td className="border p-4 text-gray-600">{appt.time}</td>
                  <td
                    className={`border p-4 font-bold ${
                      appt.status === "Completed"
                        ? "text-green-600"
                        : appt.status === "Cancelled"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {appt.status}
                  </td>
                  <td
                    className={`border p-4 ${
                      appt.paymentStatus === "Completed"
                        ? "text-blue-600"
                        : "text-gray-600"
                    }`}
                  >
                    {appt.paymentStatus || "Pending"}
                  </td>
                  <td className="border p-4 space-x-2">
                    {appt.status === "Upcoming" && (
                      <>
                        <button
                          onClick={() => updateStatus(appt.id, "Completed")}
                          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                        >
                          ✅ Complete
                        </button>
                        <button
                          onClick={() => updateStatus(appt.id, "Cancelled")}
                          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                        >
                          ❌ Cancel
                        </button>
                      </>
                    )}
                    {appt.status === "Completed" && appt.paymentStatus !== "Completed" && (
                      <button
                        onClick={() => markAsPaid(appt.id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                      >
                        💰 Mark as Paid
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
