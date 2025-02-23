// "use client";

// const stats = [
//   { label: "Total Sessions", value: "12", trend: "+2 this month", emoji: "📅", gradient: "from-green-400 to-teal-500" },
//   { label: "Hours Spent", value: "8.5", trend: "1.5 this week", emoji: "⏰", gradient: "from-blue-400 to-indigo-500" },
//   { label: "Therapists Consulted", value: "3", trend: "Across 2 specialties", emoji: "🧑‍⚕️", gradient: "from-purple-400 to-pink-500" },
//   { label: "Resources Accessed", value: "7", trend: "2 new this week", emoji: "📚", gradient: "from-yellow-400 to-orange-500" },
// ];

// export default function UserStatsCards() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//       {stats.map((stat, index) => (
//         <div
//           key={index}
//           className={`bg-gradient-to-br ${stat.gradient} text-white rounded-2xl p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl`}
//         >
//           <div className="flex justify-between items-start">
//             <div>
//               <p className="text-lg font-medium">{stat.label}</p>
//               <h3 className="text-4xl font-bold mt-1">{stat.value}</h3>
//             </div>
//             <span className="text-3xl">{stat.emoji}</span>
//           </div>
//           <p className="text-white/80 text-sm mt-4">{stat.trend}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
"use client";

const stats = [
  { label: "Total Sessions", value: "12", trend: "+2 this month", emoji: "📅", gradient: "from-red-600 to-rose-500" },
  { label: "Hours Spent", value: "8.5", trend: "1.5 this week", emoji: "⏰", gradient: "from-blue-400 to-indigo-500" },
  { label: "Therapists Consulted", value: "3", trend: "Across 2 specialties", emoji: "🧑‍⚕️", gradient: "from-purple-400 to-pink-500" },
  { label: "Resources Accessed", value: "7", trend: "2 new this week", emoji: "📚", gradient: "from-yellow-400 to-orange-500" },
];

export default function UserStatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br ${stat.gradient} text-white rounded-2xl p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl`}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-lg font-medium">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm text-gray-200">{stat.trend}</p>
            </div>
            <span className="text-4xl">{stat.emoji}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
