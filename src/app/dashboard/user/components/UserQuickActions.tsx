// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

// const quickActions = [
//   // { label: "Book a Session", href: "/user/therapists", icon: "📅", gradient: "bg-gradient-to-r from-teal-500 to-green-500" },
//   { label: "Book a Session", href: "/user/book-sessions/BookSession", icon: "📅", gradient: "bg-gradient-to-r from-teal-500 to-green-500" },
//   { label: "View Resources", href: "/user/resources", icon: "📚", gradient: "bg-gradient-to-r from-green-500 to-lime-500" },
//   { label: "Chat with Support", href: "/user/messages", icon: "💬", gradient: "bg-gradient-to-r from-purple-500 to-indigo-500" },
//   { label: "Feedback & Reports", href: "/user/feedback", icon: "📝", gradient: "bg-gradient-to-r from-yellow-500 to-orange-500" },
// ];

// export default function UserQuickActions() {
//   return (
//     <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
//       <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Quick Actions</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {quickActions.map((action, index) => (
//           <Link key={index} href={action.href} passHref>
//             <motion.div
//               className={`p-4 rounded-lg text-white flex items-center gap-3 cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${action.gradient}`}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="text-2xl">{action.icon}</span>
//               <p className="text-lg font-medium">{action.label}</p>
//             </motion.div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }




// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

// const quickActions = [
//   { label: "Book a Session", href: "/dashboard/user/book-session", icon: "📅", gradient: "bg-gradient-to-r from-teal-500 to-green-500" },
//   { label: "View Resources", href: "/dashboard/user/mental-health-resources", icon: "📚", gradient: "bg-gradient-to-r from-green-500 to-lime-500" },
//   { label: "Chat with Support", href: "/user/messages", icon: "💬", gradient: "bg-gradient-to-r from-purple-500 to-indigo-500" },
//   { label: "Feedback & Reports", href: "/user/feedback", icon: "📝", gradient: "bg-gradient-to-r from-yellow-500 to-orange-500" },
// ];

// export default function UserQuickActions() {
//   return (
//     <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
//       <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Quick Actions</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {quickActions.map((action, index) => (
//           <Link key={index} href={action.href} passHref>
//             <motion.div
//               className={`p-4 rounded-lg text-white flex items-center gap-3 cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${action.gradient}`}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="text-2xl">{action.icon}</span>
//               <p className="text-lg font-medium">{action.label}</p>
//             </motion.div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }


import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const quickActions = [
  { label: "Book a Session", href: "/dashboard/user/book-session", icon: "📅", gradient: "bg-gradient-to-r from-teal-500 to-green-500" },
  { label: "View Resources", href: "/dashboard/user/mental-health-resources", icon: "📚", gradient: "bg-gradient-to-r from-green-500 to-lime-500" },
  { label: "Chat with Support", href: "/user/messages", icon: "💬", gradient: "bg-gradient-to-r from-purple-500 to-indigo-500" },
  { label: "Feedback & Reports", href: "/user/feedback", icon: "📝", gradient: "bg-gradient-to-r from-yellow-500 to-orange-500" },
];

export default function UserQuickActions() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <Link key={index} href={action.href} passHref>
            <motion.div
              className={`p-4 rounded-lg text-white flex items-center gap-3 cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${action.gradient}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">{action.icon}</span>
              <p className="text-lg font-medium">{action.label}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
