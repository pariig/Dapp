// 'use client'

// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

// const navItems = [
//   { label: 'Dashboard', href: '/user' },
//   { label: 'Therapists', href: '/user/therapists' },
//   { label: 'Sessions', href: '/user/sessions' },
//   { label: 'Messages', href: '/user/messages' },
//   { label: 'Resources', href: '/user/resources' },
//   { label: 'Settings', href: '/user/settings' },
// ]

// export default function UserSidebar() {
//   const pathname = usePathname()

//   return (
//     <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-6">
//       <div className="mb-8">
//         <h1 className="text-2xl font-bold text-blue-600">HealthConnect</h1>
//       </div>
      
//       <nav className="space-y-2">
//         {navItems.map((item) => {
//           const isActive = pathname === item.href
//           return (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
//                 isActive 
//                   ? 'bg-blue-50 text-blue-600' 
//                   : 'text-gray-600 hover:bg-gray-50'
//               }`}
//             >
//               <span className={isActive ? 'font-medium' : ''}>
//                 {item.label}
//               </span>
//             </Link>
//           )
//         })}
//       </nav>
//     </div>
//   )
// }

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

// Optional: Add icons (use any icon library like Heroicons, Font Awesome, etc.)
const navItems = [
  { label: 'Dashboard', href: '/user', icon: '🏠' },
  { label: 'Therapists', href: '/user/therapists', icon: '👩‍⚕️' },
  { label: 'Sessions', href: '/user/sessions', icon: '📅' },
  { label: 'Messages', href: '/user/messages', icon: '💬' },
  { label: 'Resources', href: '/user/resources', icon: '📚' },
  { label: 'Settings', href: '/user/settings', icon: '⚙️' },
]

export default function UserSidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-br from-[#34e89e] to-[#0f3443] text-white shadow-lg p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white">HealthConnect</h1>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <motion.div
              key={item.href}
              className="transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                  isActive 
                    ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white' 
                    : 'text-gray-300 hover:bg-gradient-to-r hover:from-teal-300 hover:to-blue-400'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className={isActive ? 'font-medium' : ''}>
                  {item.label}
                </span>
              </Link>
            </motion.div>
          )
        })}
      </nav>
    </div>
  )
}
