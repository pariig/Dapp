// "use client";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useRouter } from "next/navigation"; // Import Next.js Router
// import { ethers } from "ethers";

// export default function Login() {
//   const [role, setRole] = useState<"user" | "therapist" | null>(null);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#34e89e] to-[#0f3443]">
//       <Card className="w-full max-w-md shadow-2xl p-6 rounded-2xl border border-gray-200 bg-white">
//         <CardHeader>
//           <CardTitle className="text-center text-3xl font-bold text-gray-800">
//             Login
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           {!role ? (
//             <div className="space-y-4">
//               <Button
//                 onClick={() => setRole("user")}
//                 className="w-full bg-gradient-to-r from-teal-500 to-green-400 text-white py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
//               >
//                 Login as User
//               </Button>
//               <Button
//                 onClick={() => setRole("therapist")}
//                 className="w-full bg-gradient-to-r from-teal-500 to-green-400 text-white py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
//               >
//                 Login as Therapist
//               </Button>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               <Label className="text-gray-700">Email</Label>
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />

//               <Label className="text-gray-700">Password</Label>
//               <Input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />

//               <Button className="w-full bg-gradient-to-r from-teal-500 to-green-400 text-white py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
//                 Login
//               </Button>

//               <p className="text-gray-500 text-sm text-center">Or login using MetaMask</p>

//               <Button
//                 onClick={() => console.log("Connect with MetaMask")}
//                 className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
//               >
//                 Connect with MetaMask
//               </Button>

//               <Button
//                 variant="ghost"
//                 className="w-full bg-gradient-to-r from-gray-400 to-gray-700 text-white py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
//                 onClick={() => setRole(null)}
//               >
//                 Back
//               </Button>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation"; // Import Next.js Router
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Login() {
  const [role, setRole] = useState<"user" | "therapist" | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [signature, setSignature] = useState<string | null>(null);
  const router = useRouter();

  const connectWallet = async () => {
    if (!role) {
      alert("Please select a role before connecting with MetaMask.");
      return;
    }

    try {
      if (!window.ethereum) {
        alert("MetaMask is not installed. Please install it to use this feature.");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);

      // Request user to sign a message
      const message = `Sign this message to log in as ${role}. Timestamp: ${Date.now()}`;
      const userSignature = await signer.signMessage(message);
      setSignature(userSignature);

      console.log("Wallet Address:", address);
      console.log("Signature:", userSignature);

      // Redirect based on role
      if (role === "user") {
        router.push("/dashboard/user"); // User Dashboard
      } else if (role === "therapist") {
        router.push("/dashboard/therapist"); // Therapist Dashboard
      }

    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#34e89e] to-[#0f3443]">
      <Card className="w-full max-w-md shadow-2xl p-6 rounded-2xl border border-gray-200 bg-white">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-gray-800">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {!role ? (
            <div className="space-y-4">
              <Button
                onClick={() => setRole("user")}
                className="w-full bg-gradient-to-r from-teal-500 to-green-400 text-white py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Login as User
              </Button>
              <Button
                onClick={() => setRole("therapist")}
                className="w-full bg-gradient-to-r from-teal-500 to-green-400 text-white py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Login as Therapist
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Label className="text-gray-700">Email</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <Label className="text-gray-700">Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <Button className="w-full bg-gradient-to-r from-teal-500 to-green-400 text-white py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                Login
              </Button>

              <p className="text-gray-500 text-sm text-center">Or login using MetaMask</p>

              {walletAddress ? (
                <p className="text-center text-green-600 font-bold">
                  Connected: {walletAddress}
                </p>
              ) : (
                <Button
                  onClick={connectWallet}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  Connect with MetaMask
                </Button>
              )}

              <Button
                variant="ghost"
                className="w-full bg-gradient-to-r from-gray-400 to-gray-700 text-white py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                onClick={() => setRole(null)}
              >
                Back
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}


