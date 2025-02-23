"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function UserHeader() {
  return (
    <motion.div 
      className="flex justify-between items-center mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div>
        <motion.h1 
          className="text-3xl font-bold text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Welcome Dear User!
        </motion.h1>
        <p className="text-gray-200">Your mental health journey starts here.</p>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Input 
            type="text" 
            placeholder="Search therapists, resources..." 
            className="pl-10 w-64 bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-teal-400"
          />
          <span className="absolute left-3 top-2.5 text-gray-500">🔍</span>
        </div>

        <motion.span 
          className="text-2xl cursor-pointer text-white"
          whileHover={{ scale: 1.2 }}
        >
          🔔
        </motion.span>

        <motion.div 
          className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          U
        </motion.div>
      </div>
    </motion.div>
  );
}
