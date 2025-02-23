import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#34e89e] to-[#0f3443] text-white p-8">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold text-center mb-6"
      >
        Contact Us
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center mb-8 text-lg"
      >
        We would love to hear from you! Please reach out to us with any questions.
      </motion.p>

      {/* Simple Contact Form (you can expand this) */}
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full p-3 mt-2 rounded-lg border" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-3 mt-2 rounded-lg border" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full p-3 mt-2 rounded-lg border" placeholder="Your Message" rows={4}></textarea>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white p-3 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
