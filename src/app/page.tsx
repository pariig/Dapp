// "use client";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// export default function Home() {
//   const [scrollProgress, setScrollProgress] = useState(0);


//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (scrollTop / scrollHeight) * 100;
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (

     

//     <div className="min-h-screen bg-gradient-to-br from-[#34e89e] to-[#0f3443] text-white overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-600">
//        {/* Progress Bar */}
//        <div
//         className="fixed top-0 left-0 h-1 bg-blue-500 z-50"
//         style={{ width: `${scrollProgress}%` }}
//       ></div>
//       {/* Hero Section */}
//       <header className="text-center py-20">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-5xl font-bold drop-shadow-lg"
//         >
//          Your Mental Health, Your Privacy, Your Control
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="mt-4 text-lg max-w-2xl mx-auto opacity-90"
//         >
//           A decentralized platform that connects users with therapists securely and anonymously using Web3.
//         </motion.p>
//         <motion.div
//           className="mt-6 flex justify-center space-x-4"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//         >
//           <Link href="/dashboard/therapist">
//             <Button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-lg hover:scale-110 transition-all">
//               Therapist Dashboard
//             </Button>
//           </Link>
//           <Link href="/dashboard/user">
//             <Button className="bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg hover:scale-110 transition-all">
//               User Dashboard
//             </Button>
//           </Link>
//         </motion.div>
//       </header>

//       {/* Features Section */}
//       <motion.section
//         className="py-16 px-6 max-w-5xl mx-auto"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 drop-shadow-lg">Why Choose Us?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { title: "🔒 100% Anonymity", desc: "Stay anonymous while connecting with verified therapists." },
//             { title: "💰 Crypto Payments", desc: "Pay securely with cryptocurrency, no third-party tracking." },
//             { title: "💬 Live Support", desc: "Get instant help with secure, end-to-end encrypted chat." }
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <Card className="bg-white text-gray-800 shadow-lg rounded-xl">
//                 <CardContent className="p-6 text-center">
//                   <h3 className="text-xl font-semibold">{feature.title}</h3>
//                   <p className="text-gray-600 mt-2">{feature.desc}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* How It Works Section */}
//       <motion.section
//         className="py-16 px-6 bg-gradient-to-br from-gray-300 to-gray-500 text-gray-900"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 drop-shadow-lg">How It Works</h2>
//         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { step: "📝 Step 1", desc: "Sign up with your crypto wallet and choose your role." },
//             { step: "🩺 Step 2", desc: "Users connect with therapists for anonymous sessions." },
//             { step: "💳 Step 3", desc: "Secure payments are processed via blockchain." }
//           ].map((step, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <Card className="bg-white text-gray-800 shadow-lg rounded-xl">
//                 <CardContent className="p-6 text-center">
//                   <h3 className="text-xl font-semibold">{step.step}</h3>
//                   <p className="text-gray-600 mt-2">{step.desc}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Footer */}
//       <motion.footer
//         className="text-center py-6 bg-gray-800 text-white"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <p>&copy; 2025 SoulChain All rights reserved.</p>
//       </motion.footer>
//     </div>
//   );
// }




// "use client";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// export default function Home() {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (scrollTop / scrollHeight) * 100;
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#34e89e] to-[#0f3443] text-white overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-600">
//       {/* Progress Bar */}
//       <div className="fixed top-0 left-0 h-1 bg-blue-500 z-50" style={{ width: `${scrollProgress}%` }}></div>

//       {/* Hero Section */}
//       <header className="text-center py-20 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-5xl font-bold drop-shadow-lg"
//         >
//           Your Mental Health, Your Privacy, Your Control
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="mt-4 text-lg max-w-2xl mx-auto opacity-90"
//         >
//           A decentralized platform that connects users with therapists securely and anonymously using Web3.
//         </motion.p>
//         <motion.div
//           className="mt-6 flex justify-center space-x-4"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//         >
//           <Link href="/dashboard/therapist">
//             <Button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-lg hover:scale-110 transition-all">
//               Therapist Dashboard
//             </Button>
//           </Link>
//           <Link href="/dashboard/user">
//             <Button className="bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg hover:scale-110 transition-all">
//               User Dashboard
//             </Button>
//           </Link>
//         </motion.div>
//       </header>

//       {/* Who We Are Section */}
//       <motion.section
//         className="py-16 px-6 bg-gray-100 text-gray-900"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 drop-shadow-lg">Who We Are?</h2>
//         <p className="text-lg max-w-3xl mx-auto text-center opacity-80">
//           At SoulChain, we believe that everyone deserves access to mental health support! We connect users with
//           therapists in a decentralized, secure, and anonymous manner using blockchain technology. Your privacy and
//           safety are our top priorities, and our platform ensures that all interactions are confidential, offering a
//           new level of trust and reliability.
//         </p>
//       </motion.section>

//       {/* Features Section */}
//       <motion.section
//         className="py-16 px-6 max-w-5xl mx-auto"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 drop-shadow-lg">Why Choose Us?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { title: "🔒 100% Anonymity", desc: "Stay anonymous while connecting with verified therapists." },
//             { title: "💰 Crypto Payments", desc: "Pay securely with cryptocurrency, no third-party tracking." },
//             { title: "💬 Live Support", desc: "Get instant help with secure, end-to-end encrypted chat." }
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <Card className="bg-white text-gray-800 shadow-lg rounded-xl">
//                 <CardContent className="p-6 text-center">
//                   <h3 className="text-xl font-semibold">{feature.title}</h3>
//                   <p className="text-gray-600 mt-2">{feature.desc}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* How It Works Section */}
//       <motion.section
//         className="py-16 px-6 bg-gradient-to-br from-gray-300 to-gray-500 text-gray-900"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 drop-shadow-lg">How It Works</h2>
//         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { step: "📝 Step 1", desc: "Sign up with your crypto wallet and choose your role." },
//             { step: "🩺 Step 2", desc: "Users connect with therapists for anonymous sessions." },
//             { step: "💳 Step 3", desc: "Secure payments are processed via blockchain." }
//           ].map((step, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <Card className="bg-white text-gray-800 shadow-lg rounded-xl">
//                 <CardContent className="p-6 text-center">
//                   <h3 className="text-xl font-semibold">{step.step}</h3>
//                   <p className="text-gray-600 mt-2">{step.desc}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Call to Action Section */}
//       <motion.section
//         className="py-16 px-6 bg-gradient-to-r from-teal-600 to-blue-800 text-white text-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-3xl font-bold mb-4">Ready to take control of your mental health?</h2>
//         <p className="text-lg mb-6">
//           Join SoulChain today and connect with professionals who respect your privacy. Experience mental health support like never before.
//         </p>
//         <Link href="/login">
//           <Button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-lg hover:scale-110 transition-all">
//             Get Started
//           </Button>
//         </Link>
//       </motion.section>

//       {/* Footer */}
//       <motion.footer
//         className="text-center py-6 bg-gray-800 text-white"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <p>&copy; 2025 SoulChain. All rights reserved.</p>
//       </motion.footer>
//     </div>
//   );
// }


// "use client";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// export default function Home() {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (scrollTop / scrollHeight) * 100;
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f9f7f2] via-[#f1e9d2] to-[#e6d8b9] text-gray-800 overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-500">
//       {/* Progress Bar */}
//       <div className="fixed top-0 left-0 h-1 bg-teal-500 z-50" style={{ width: `${scrollProgress}%` }}></div>

//       {/* Hero Section */}
//       <header className="text-center py-20 bg-gradient-to-r from-[#f7f1e1] to-[#e8e1c2] text-gray-800 shadow-lg">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-5xl font-extrabold drop-shadow-lg text-teal-600"
//         >
//           Your Mental Health, Your Privacy, Your Control
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="mt-4 text-lg max-w-2xl mx-auto opacity-80 text-gray-700"
//         >
//           A decentralized platform that connects users with therapists securely and anonymously using Web3.
//         </motion.p>
//         <motion.div
//           className="mt-6 flex justify-center space-x-4"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//         >
//           <Link href="/dashboard/therapist">
//             <Button className="bg-teal-400 hover:bg-teal-300 text-white shadow-lg hover:scale-110 transition-all">
//               Therapist Dashboard
//             </Button>
//           </Link>
//           <Link href="/dashboard/user">
//             <Button className="bg-[#9c9c9c] hover:bg-[#7e7e7e] text-white shadow-lg hover:scale-110 transition-all">
//               User Dashboard
//             </Button>
//           </Link>
//         </motion.div>
//       </header>

//       {/* Features Section */}
//       <motion.section
//         className="py-16 px-6 max-w-5xl mx-auto"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 text-teal-500">Why Choose Us?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { title: "🔒 100% Anonymity", desc: "Stay anonymous while connecting with verified therapists." },
//             { title: "💰 Crypto Payments", desc: "Pay securely with cryptocurrency, no third-party tracking." },
//             { title: "💬 Live Support", desc: "Get instant help with secure, end-to-end encrypted chat." }
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <Card className="bg-white text-gray-800 shadow-lg rounded-xl border border-gray-200">
//                 <CardContent className="p-6 text-center">
//                   <h3 className="text-xl font-semibold text-teal-500">{feature.title}</h3>
//                   <p className="text-gray-600 mt-2">{feature.desc}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Footer */}
//       <motion.footer
//         className="text-center py-6 bg-[#f1e9d2] text-gray-700 border-t border-gray-300"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <p>&copy; 2025 SoulChain. All rights reserved.</p>
//       </motion.footer>
//     </div>
//   );
// }



// "use client";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// export default function Home() {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (scrollTop / scrollHeight) * 100;
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f9f6f0] to-[#e4e0c8] text-gray-800 overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400">
//       {/* Progress Bar */}
//       <div className="fixed top-0 left-0 h-1 bg-teal-400 z-50" style={{ width: `${scrollProgress}%` }}></div>

//       {/* Hero Section */}
//       <header className="text-center py-20 bg-gradient-to-r from-[#e4d6b3] to-[#d8c4a1] text-gray-800 shadow-lg">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-5xl font-bold drop-shadow-lg text-teal-500"
//         >
//           Your Mental Health, Your Privacy, Your Control
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="mt-4 text-lg max-w-2xl mx-auto opacity-80"
//         >
//           A decentralized platform that connects users with therapists securely and anonymously using Web3.
//         </motion.p>
//         <motion.div
//           className="mt-6 flex justify-center space-x-4"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//         >
//           <Link href="/dashboard/therapist">
//             <Button className="bg-gradient-to-r from-teal-500 to-teal-400 text-white shadow-lg hover:scale-110 transition-all">
//               Therapist Dashboard
//             </Button>
//           </Link>
//           <Link href="/dashboard/user">
//             <Button className="bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg hover:scale-110 transition-all">
//               User Dashboard
//             </Button>
//           </Link>
//         </motion.div>
//       </header>

//       {/* Who We Are Section */}
//       <motion.section
//         className="py-16 px-6 bg-[#f4f0e1] text-gray-800"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 text-teal-500">Who We Are?</h2>
//         <p className="text-lg max-w-3xl mx-auto text-center opacity-80">
//           At SoulChain, we believe that everyone deserves access to mental health support! We connect users with
//           therapists in a decentralized, secure, and anonymous manner using blockchain technology. Your privacy and
//           safety are our top priorities, and our platform ensures that all interactions are confidential, offering a
//           new level of trust and reliability.
//         </p>
//       </motion.section>

//       {/* Features Section */}
//       <motion.section
//         className="py-16 px-6 max-w-5xl mx-auto"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 text-teal-500">Why Choose Us?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { title: "🔒 100% Anonymity", desc: "Stay anonymous while connecting with verified therapists." },
//             { title: "💰 Crypto Payments", desc: "Pay securely with cryptocurrency, no third-party tracking." },
//             { title: "💬 Live Support", desc: "Get instant help with secure, end-to-end encrypted chat." }
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <Card className="bg-white text-gray-800 shadow-lg rounded-xl">
//                 <CardContent className="p-6 text-center">
//                   <h3 className="text-xl font-semibold text-teal-500">{feature.title}</h3>
//                   <p className="text-gray-600 mt-2">{feature.desc}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* How It Works Section */}
//       <motion.section
//         className="py-16 px-6 bg-[#e1d7c6] text-gray-800"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 text-teal-500">How It Works</h2>
//         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { step: "📝 Step 1", desc: "Sign up with your crypto wallet and choose your role." },
//             { step: "🩺 Step 2", desc: "Users connect with therapists for anonymous sessions." },
//             { step: "💳 Step 3", desc: "Secure payments are processed via blockchain." }
//           ].map((step, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <Card className="bg-white text-gray-800 shadow-lg rounded-xl">
//                 <CardContent className="p-6 text-center">
//                   <h3 className="text-xl font-semibold text-teal-500">{step.step}</h3>
//                   <p className="text-gray-600 mt-2">{step.desc}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Call to Action Section */}
//       <motion.section
//         className="py-16 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-3xl font-bold mb-4">Ready to take control of your mental health?</h2>
//         <p className="text-lg mb-6">
//           Join SoulChain today and connect with professionals who respect your privacy. Experience mental health support like never before.
//         </p>
//         <Link href="/login">
//           <Button className="bg-gradient-to-r from-teal-400 to-teal-500 text-white shadow-lg hover:scale-110 transition-all">
//             Get Started
//           </Button>
//         </Link>
//       </motion.section>

//       {/* Footer */}
//       <motion.footer
//         className="text-center py-6 bg-[#e4d6b3] text-gray-800"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <p>&copy; 2025 SoulChain. All rights reserved.</p>
//       </motion.footer>
//     </div>
//   );
// }

// "use client"; 
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// export default function Home() {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (scrollTop / scrollHeight) * 100;
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f9f6f0] to-[#e4e0c8] text-gray-800 overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400">
//       {/* Progress Bar */}
//       <div className="fixed top-0 left-0 h-1 bg-teal-400 z-50" style={{ width: `${scrollProgress}%` }}></div>

//       {/* Hero Section */}
//       <header className="text-center py-20 bg-gradient-to-r from-[#e4d6b3] to-[#d8c4a1] text-gray-800 shadow-lg">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-5xl font-bold drop-shadow-lg text-teal-600"
//         >
//           Your Mental Health, Your Privacy, Your Control
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="mt-4 text-lg max-w-2xl mx-auto opacity-80"
//         >
//           A decentralized platform that connects users with therapists securely and anonymously using Web3.
//         </motion.p>
//         <motion.div
//           className="mt-6 flex justify-center space-x-4"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//         >
//           <Link href="/dashboard/therapist">
//             <Button className="bg-gradient-to-r from-teal-400 to-teal-300 text-white shadow-lg hover:scale-110 transition-all">
//               Therapist Dashboard
//             </Button>
//           </Link>
//           <Link href="/dashboard/user">
//             <Button className="bg-gradient-to-r from-[#a1c4e9] to-[#c2d9f1] text-white shadow-lg hover:scale-110 transition-all">
//               User Dashboard
//             </Button>
//           </Link>
//         </motion.div>
//       </header>

//       {/* Who We Are Section */}
//       <motion.section
//         className="py-16 px-6 bg-[#f4f0e1] text-gray-800"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 text-teal-500">Who We Are?</h2>
//         <p className="text-lg max-w-3xl mx-auto text-center opacity-80">
//           At SoulChain, we believe that everyone deserves access to mental health support! We connect users with
//           therapists in a decentralized, secure, and anonymous manner using blockchain technology. Your privacy and
//           safety are our top priorities, and our platform ensures that all interactions are confidential, offering a
//           new level of trust and reliability.
//         </p>
//       </motion.section>

//       {/* Features Section */}
//       <motion.section
//         className="py-16 px-6 max-w-5xl mx-auto"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 text-teal-500">Why Choose Us?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { title: "🔒 100% Anonymity", desc: "Stay anonymous while connecting with verified therapists." },
//             { title: "💰 Crypto Payments", desc: "Pay securely with cryptocurrency, no third-party tracking." },
//             { title: "💬 Live Support", desc: "Get instant help with secure, end-to-end encrypted chat." }
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <Card className="bg-white text-gray-800 shadow-lg rounded-xl">
//                 <CardContent className="p-6 text-center">
//                   <h3 className="text-xl font-semibold text-teal-500">{feature.title}</h3>
//                   <p className="text-gray-600 mt-2">{feature.desc}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* How It Works Section */}
//       <motion.section
//         className="py-16 px-6 bg-[#e1d7c6] text-gray-800"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 text-teal-500">How It Works</h2>
//         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { step: "📝 Step 1", desc: "Sign up with your crypto wallet and choose your role." },
//             { step: "🩺 Step 2", desc: "Users connect with therapists for anonymous sessions." },
//             { step: "💳 Step 3", desc: "Secure payments are processed via blockchain." }
//           ].map((step, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <Card className="bg-white text-gray-800 shadow-lg rounded-xl">
//                 <CardContent className="p-6 text-center">
//                   <h3 className="text-xl font-semibold text-teal-500">{step.step}</h3>
//                   <p className="text-gray-600 mt-2">{step.desc}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Call to Action Section */}
//       <motion.section
//         className="py-16 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-3xl font-bold mb-4">Ready to take control of your mental health?</h2>
//         <p className="text-lg mb-6">
//           Join SoulChain today and connect with professionals who respect your privacy. Experience mental health support like never before.
//         </p>
//         <Link href="/login">
//           <Button className="bg-gradient-to-r from-teal-400 to-teal-500 text-white shadow-lg hover:scale-110 transition-all">
//             Get Started
//           </Button>
//         </Link>
//       </motion.section>

//       {/* Footer */}
//       <motion.footer
//         className="text-center py-6 bg-[#e4d6b3] text-gray-800"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <p>&copy; 2025 SoulChain. All rights reserved.</p>
//       </motion.footer>
//     </div>
//   );
// }


// "use client"; 
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// export default function Home() {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (scrollTop / scrollHeight) * 100;
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f9f6f0] to-[#e4e0c8] text-gray-800 overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400">
//       {/* Progress Bar */}
//       <div className="fixed top-0 left-0 h-1 bg-teal-400 z-50" style={{ width: `${scrollProgress}%` }}></div>

//       {/* Hero Section */}
//       <header className="text-center py-20 bg-gradient-to-r from-[#e4d6b3] to-[#d8c4a1] text-gray-800 shadow-lg">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-5xl font-bold drop-shadow-lg text-pink-500"
//         >
//           Your Mental Health, Your Privacy, Your Control
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="mt-4 text-lg max-w-2xl mx-auto opacity-80"
//         >
//           A decentralized platform that connects users with therapists securely and anonymously using Web3.
//         </motion.p>
//         <motion.div
//           className="mt-6 flex justify-center space-x-4"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//         >
//           <Link href="/dashboard/therapist">
//             <Button className="bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-lg hover:scale-110 transition-all p-4">
//               Therapist Dashboard
//             </Button>
//           </Link>
//           <Link href="/dashboard/user">
//             <Button className="bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-lg hover:scale-110 transition-all p-4">
//               User Dashboard
//             </Button>
//           </Link>
//         </motion.div>
//       </header>

//       {/* Who We Are Section */}
//       <motion.section
//         className="py-16 px-6 bg-[#f4f0e1] text-gray-800"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">Who We Are?</h2>
//         <p className="text-lg max-w-3xl mx-auto text-center opacity-80">
//           At SoulChain, we believe that everyone deserves access to mental health support! We connect users with
//           therapists in a decentralized, secure, and anonymous manner using blockchain technology. Your privacy and
//           safety are our top priorities, and our platform ensures that all interactions are confidential, offering a
//           new level of trust and reliability.
//         </p>
//       </motion.section>

//       {/* Features Section */}
//       <motion.section
//         className="py-16 px-6 max-w-5xl mx-auto"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 text-coffee-500">Why Choose Us?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { title: "🔒 100% Anonymity", desc: "Stay anonymous while connecting with verified therapists." },
//             { title: "💰 Crypto Payments", desc: "Pay securely with cryptocurrency, no third-party tracking." },
//             { title: "💬 Live Support", desc: "Get instant help with secure, end-to-end encrypted chat." }
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <Card className="bg-white text-gray-800 shadow-lg rounded-xl">
//                 <CardContent className="p-6 text-center">
//                   <h3 className="text-xl font-semibold pink-pink-500">{feature.title}</h3>
//                   <p className="text-gray-600 mt-2">{feature.desc}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* How It Works Section */}
//       <motion.section
//         className="py-16 px-6 bg-[#e1d7c6] text-gray-800"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">How It Works</h2>
//         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { step: "📝 Step 1", desc: "Sign up with your crypto wallet and choose your role." },
//             { step: "🩺 Step 2", desc: "Users connect with therapists for anonymous sessions." },
//             { step: "💳 Step 3", desc: "Secure payments are processed via blockchain." }
//           ].map((step, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <Card className="bg-white text-gray-800 shadow-lg rounded-xl">
//                 <CardContent className="p-6 text-center">
//                   <h3 className="text-xl font-semibold pink-pink-500">{step.step}</h3>
//                   <p className="text-gray-600 mt-2">{step.desc}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Call to Action Section */}
//       <motion.section
//         className="py-16 px-6 bg-gradient-to-r from-lightBlue-500 to-lightBlue-400 text-white text-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-3xl font-bold mb-4 text-pink-500">Ready to take control of your mental health?</h2>
//         <p className="text-lg mb-6 text-pink-500">
//           Join SoulChain today and connect with professionals who respect your privacy. Experience mental health support like never before.
//         </p>
//         <Link href="/login">
//           <Button className="bg-gradient-to-r from-coffee-400 to-coffee-500 text-white shadow-lg hover:scale-110 transition-all">
//             Get Started
//           </Button>
//         </Link>
//       </motion.section>

//       {/* Footer */}
//       <motion.footer
//         className="text-center py-6 bg-[#e4d6b3] text-gray-800"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <p>&copy; 2025 SoulChain. All rights reserved.</p>
//       </motion.footer>
//     </div>
//   );
// }
"use client"; 
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6f0] to-[#e4e0c8] text-gray-800 overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-teal-400 z-50" style={{ width: `${scrollProgress}%` }}></div>

      {/* Hero Section */}
      <header className="text-center py-20 bg-gradient-to-r from-[#e4d6b3] to-[#d8c4a1] text-gray-800 shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-bold drop-shadow-lg text-coffee-500"
        >
          Your Mental Health, Your Privacy, Your Control
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg max-w-2xl mx-auto opacity-80"
        >
          A decentralized platform that connects users with therapists securely and anonymously using Web3.
        </motion.p>
        <motion.div
          className="mt-6 flex justify-center space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link href="/dashboard/therapist">
            <Button className="bg-gradient-to-r from-coffee-500 to-coffee-400 text-white shadow-lg hover:scale-110 transition-all p-4">
              Therapist Dashboard
            </Button>
          </Link>
          <Link href="/dashboard/user">
            <Button className="bg-gradient-to-r from-coffee-500 to-coffee-400 text-white shadow-lg hover:scale-110 transition-all p-4">
              User Dashboard
            </Button>
          </Link>
        </motion.div>
      </header>

   
{/* Who We Are Section */}
{/* <motion.section
  className="py-16 px-6 bg-white text-gray-800"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <h2 className="text-3xl font-bold text-center mb-6 text-coffee-500">Who We Are?</h2>
  <p className="text-lg max-w-3xl mx-auto text-center opacity-80">
    At SoulChain, we believe that everyone deserves access to mental health support! We connect users with
    therapists in a decentralized, secure, and anonymous manner using blockchain technology. Your privacy and
    safety are our top priorities, and our platform ensures that all interactions are confidential, offering a
    new level of trust and reliability.
  </p>
</motion.section> */}

{/* Who We Are Section */}
<motion.section
  className="py-16 px-6 bg-white text-gray-800 flex flex-col md:flex-row items-center justify-between"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  {/* Text Section */}
  <div className="text-center md:text-left max-w-3xl">
    <h2 className="text-3xl font-bold mb-6 text-coffee-500">Who We Are?</h2>
    <p className="text-lg opacity-80">
      At SoulChain, we believe that everyone deserves access to mental health support! We connect users with
      therapists in a decentralized, secure, and anonymous manner using blockchain technology. Your privacy and
      safety are our top priorities, and our platform ensures that all interactions are confidential, offering a
      new level of trust and reliability.
    </p>
  </div>

  {/* Image Section */}
  <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center">
    <img
      src="/TWC_Online-Therapy-01.png"  // Path to your image
      alt="Therapist"
      className="max-w-[80%] md:max-w-[60%] h-auto rounded-lg shadow-lg"
    />
  </div>
</motion.section>


      {/* Features Section */}
      <motion.section
        className="py-16 px-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-coffee-500">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "🔒 100% Anonymity", desc: "Stay anonymous while connecting with verified therapists." },
            { title: "💰 Crypto Payments", desc: "Pay securely with cryptocurrency, no third-party tracking." },
            { title: "💬 Live Support", desc: "Get instant help with secure, end-to-end encrypted chat." }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="bg-white text-gray-800 shadow-lg rounded-xl">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-coffee-500">{feature.title}</h3>
                  <p className="text-gray-600 mt-2">{feature.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="py-16 px-6 bg-[#e1d7c6] text-gray-800"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-coffee-500">How It Works</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: "📝 Step 1", desc: "Sign up with your crypto wallet and choose your role." },
            { step: "🩺 Step 2", desc: "Users connect with therapists for anonymous sessions." },
            { step: "💳 Step 3", desc: "Secure payments are processed via blockchain." }
          ].map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="bg-white text-gray-800 shadow-lg rounded-xl">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-coffee-500">{step.step}</h3>
                  <p className="text-gray-600 mt-2">{step.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="py-16 px-6 bg-gradient-to-r from-lightBlue-500 to-lightBlue-400 text-black text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-coffee-500">Ready to take control of your mental health?</h2>
        <p className="text-lg mb-6 text-coffee-500">
          Join SoulChain today and connect with professionals who respect your privacy. Experience mental health support like never before.
        </p>
        <Link href="/login">
          <Button className="bg-gradient-to-r from-black-400 to-black-500 text-black shadow-lg hover:scale-110 transition-all">
            Get Started
          </Button>
        </Link>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="text-center py-6 bg-[#e4d6b3] text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>&copy; 2025 SoulChain. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}




// "use client";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// export default function Home() {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (scrollTop / scrollHeight) * 100;
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f7f2eb] to-[#e8e3d8] text-gray-900 overflow-y-auto scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-500">
//       {/* Progress Bar */}
//       <div className="fixed top-0 left-0 h-1 bg-[#8e7b6d] z-50" style={{ width: `${scrollProgress}%` }}></div>

//       {/* Hero Section */}
//       <header className="text-center py-20 bg-gradient-to-r from-[#e8e3d8] to-[#d7cbbd] text-gray-900 shadow-lg">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-5xl font-bold drop-shadow-lg text-[#8e7b6d]"
//         >
//           Your Mental Health, Your Privacy, Your Control
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="mt-4 text-lg max-w-2xl mx-auto opacity-80"
//         >
//           A decentralized platform that connects users with therapists securely and anonymously using Web3.
//         </motion.p>
//         <motion.div
//           className="mt-6 flex justify-center space-x-4"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//         >
//           <Link href="/dashboard/therapist">
//             <Button className="bg-[#6d5b4f] text-white shadow-lg hover:scale-110 transition-all">
//               Therapist Dashboard
//             </Button>
//           </Link>
//           <Link href="/dashboard/user">
//             <Button className="bg-[#a08c7d] text-white shadow-lg hover:scale-110 transition-all">
//               User Dashboard
//             </Button>
//           </Link>
//         </motion.div>
//       </header>

//       {/* Who We Are Section */}
//       <motion.section
//         className="py-16 px-6 bg-[#f2ece3] text-gray-900"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 text-[#6d5b4f]">Who We Are?</h2>
//         <p className="text-lg max-w-3xl mx-auto text-center opacity-80">
//           At SoulChain, we believe that everyone deserves access to mental health support! We connect users with
//           therapists in a decentralized, secure, and anonymous manner using blockchain technology. Your privacy and
//           safety are our top priorities, and our platform ensures that all interactions are confidential, offering a
//           new level of trust and reliability.
//         </p>
//       </motion.section>

//       {/* Features Section */}
//       <motion.section
//         className="py-16 px-6 max-w-5xl mx-auto"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 text-[#6d5b4f]">Why Choose Us?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[...
//             { title: "🔒 100% Anonymity", desc: "Stay anonymous while connecting with verified therapists." },
//             { title: "💰 Crypto Payments", desc: "Pay securely with cryptocurrency, no third-party tracking." },
//             { title: "💬 Live Support", desc: "Get instant help with secure, end-to-end encrypted chat." }
//           ].map((feature, index) => (
//             <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
//               <Card className="bg-[#fdfaf5] text-gray-900 shadow-lg rounded-xl">
//                 <CardContent className="p-6 text-center">
//                   <h3 className="text-xl font-semibold text-[#6d5b4f]">{feature.title}</h3>
//                   <p className="text-gray-700 mt-2">{feature.desc}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Footer */}
//       <motion.footer
//         className="text-center py-6 bg-[#e8e3d8] text-gray-900"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <p>&copy; 2025 SoulChain. All rights reserved.</p>
//       </motion.footer>
//     </div>
//   );
// }






// "use client"; 
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// export default function Home() {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (scrollTop / scrollHeight) * 100;
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#34e89e] to-[#0f3443] text-white overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-600">
      
//       {/* Progress Bar */}
//       <div
//         className="fixed top-0 left-0 h-1 bg-blue-500 z-50"
//         style={{ width: `${scrollProgress}%` }}
//       ></div>

//       {/* Hero Section */}
//       <header className="text-center py-20">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-5xl font-bold drop-shadow-lg"
//         >
//           Your Mental Health, Your Privacy, Your Control
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="mt-4 text-lg max-w-2xl mx-auto opacity-90"
//         >
//           A decentralized platform that connects users with therapists securely and anonymously using Web3.
//         </motion.p>
//         <motion.div
//           className="mt-6 flex justify-center space-x-4"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//         >
//           {/* Therapist Dashboard Button */}
//           <Link href="/dashboard/therapist">
//             <Button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-lg hover:scale-110 transition-all">
//               Therapist Dashboard
//             </Button>
//           </Link>
//           {/* User Dashboard Button */}
//           <Link href="/dashboard/user">
//             <Button className="bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg hover:scale-110 transition-all">
//               User Dashboard
//             </Button>
//           </Link>
//           {/* Login Button */}
//           <Link href="/login">
//             <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:scale-110 transition-all">
//               Login
//             </Button>
//           </Link>
//         </motion.div>
//       </header>

//       {/* Features Section */}
//       <motion.section
//         className="py-16 px-6 max-w-5xl mx-auto"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 drop-shadow-lg">Why Choose Us?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { title: "🔒 100% Anonymity", desc: "Stay anonymous while connecting with verified therapists." },
//             { title: "💰 Crypto Payments", desc: "Pay securely with cryptocurrency, no third-party tracking." },
//             { title: "💬 Live Support", desc: "Get instant help with secure, end-to-end encrypted chat." }
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <Card className="bg-white text-gray-800 shadow-lg rounded-xl">
//                 <CardContent className="p-6 text-center">
//                   <h3 className="text-xl font-semibold">{feature.title}</h3>
//                   <p className="text-gray-600 mt-2">{feature.desc}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* How It Works Section */}
//       <motion.section
//         className="py-16 px-6 bg-gradient-to-br from-gray-300 to-gray-500 text-gray-900"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 drop-shadow-lg">How It Works</h2>
//         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { step: "📝 Step 1", desc: "Sign up with your crypto wallet and choose your role." },
//             { step: "🩺 Step 2", desc: "Users connect with therapists for anonymous sessions." },
//             { step: "💳 Step 3", desc: "Secure payments are processed via blockchain." }
//           ].map((step, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <Card className="bg-white text-gray-800 shadow-lg rounded-xl">
//                 <CardContent className="p-6 text-center">
//                   <h3 className="text-xl font-semibold">{step.step}</h3>
//                   <p className="text-gray-600 mt-2">{step.desc}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Footer */}
//       <motion.footer
//         className="text-center py-6 bg-gray-800 text-white"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <p>&copy; 2025 Mental Health DApp. All rights reserved.</p>
//       </motion.footer>
//     </div>
//   );
// }
