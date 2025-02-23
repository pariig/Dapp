// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

// const sessions = [
//   { id: 1, therapist: "Dr. Pari Gupta", time: "3:00 PM Today", type: "Video Call", specialty: "Mental Health" },
//   { id: 2, therapist: "Dr. Disha Sethi", time: "5:30 PM Tomorrow", type: "Chat Session", specialty: "Sex Education" },
// ];

// export default function UserSessions() {
//   return (
//     <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-8">
//       <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Upcoming Sessions</h2>
//       <div className="space-y-4">
//         {sessions.map((session) => (
//           <div
//             key={session.id}
//             className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all hover:bg-gray-100 dark:hover:bg-gray-700"
//           >
//             <div>
//               <h4 className="font-medium text-gray-900 dark:text-white">{session.therapist}</h4>
//               <p className="text-sm text-gray-500 dark:text-gray-400">{session.specialty}</p>
//               <p className="text-sm text-gray-500 dark:text-gray-400">{session.time}</p>
//             </div>
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button className="bg-gradient-to-r from-teal-500 to-green-500 text-white hover:opacity-90">
//                 Join {session.type}
//               </Button>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const sessions = [
  { id: 1, therapist: "Dr. Pari Gupta", time: "3:00 PM Today", type: "Video Call", specialty: "Mental Health" },
  { id: 2, therapist: "Dr. Disha Sethi", time: "5:30 PM Tomorrow", type: "Video Call", specialty: "Sex Education" },
];

export default function UserSessions() {
  const handleJoinSession = (session) => {
    if (session.type === "Video Call") {
      window.location.href = "https://leanin-hack-video-part.vercel.app/";
    } else {
      alert("Chat sessions are not supported for redirection.");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Upcoming Sessions</h2>
      <div className="space-y-4">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">{session.therapist}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{session.specialty}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{session.time}</p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-gradient-to-r from-teal-500 to-green-500 text-white hover:opacity-90"
                onClick={() => handleJoinSession(session)}
              >
                Join {session.type}
              </Button>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
