//  /app/user/mental-health-resources/page.tsx 
"use client";

import React from "react";

const MentalHealthResources = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-[#34e89e] to-[#0f3443] min-h-screen text-gray-300">
      <h1 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">Mental Health Resources</h1>
      
      <div className="bg-white p-6 shadow-md rounded-lg text-gray-900">
        <h2 className="text-xl font-semibold mb-4">Video Resources</h2>
        <div className="space-y-4">
          {/* Example YouTube Embed */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with a relevant YouTube video URL
              title="Mental Health Awareness Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/kbV-8u9ot0E" // Another example video
              title="Mental Health Coping Mechanisms"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Article Resources */}
      <div className="bg-white p-6 shadow-md rounded-lg text-gray-900 mt-6">
        <h2 className="text-xl font-semibold mb-4">Helpful Articles</h2>
        <ul className="space-y-2">
          <li>
            <a
              href="https://www.psychologytoday.com/us/basics/stress"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Stress Management: Psychology Today
            </a>
          </li>
          <li>
            <a
              href="https://www.nami.org/Your-Journey/Perspectives-on-Schizophrenia/What-Is-Schizophrenia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              What is Schizophrenia? - NAMI
            </a>
          </li>
          <li>
            <a
              href="https://www.helpguide.org/articles/depression/coping-with-depression.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Coping with Depression: HelpGuide
            </a>
          </li>
        </ul>
      </div>

      {/* Mental Health Tips Section */}
      <div className="bg-white p-6 shadow-md rounded-lg text-gray-900 mt-6">
        <h2 className="text-xl font-semibold mb-4">Mental Health Tips</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Make time for activities that relax and bring you joy, such as exercise, reading, or spending time with loved ones.</li>
          <li>Maintain a healthy routine and get enough sleep to keep your mind and body in balance.</li>
          <li>Don't hesitate to ask for help – talk to a therapist, counselor, or a trusted friend when you feel overwhelmed.</li>
          <li>Practice mindfulness and meditation to help you stay grounded and manage stress better.</li>
        </ul>
      </div>
    </div>
  );
};

export default MentalHealthResources;

// "use client";

// import React from "react";

// const resources = [
//   { title: "Guided Meditation", description: "Relax with mindfulness exercises.", link: "https://www.headspace.com/" },
//   { title: "Mood Tracking App", description: "Track emotions and patterns.", link: "https://www.daylio.net/" },
//   { title: "Support Communities", description: "Connect with others in safe spaces.", link: "https://www.7cups.com/" },
//   { title: "Crisis Helpline", description: "Find help in an emergency.", link: "https://www.opencounseling.com/suicide-hotlines" },
// ];

// export default function Resources() {
//   return (
//     <div className="p-8 bg-gradient-to-br from-[#34e89e] to-[#0f3443] min-h-screen text-gray-300">
//       <h1 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">Mental Health Resources</h1>
//       <div className="space-y-6">
//         {resources.map((resource, index) => (
//           <div key={index} className="bg-white p-4 rounded-lg shadow-md text-gray-900">
//             <h2 className="text-lg font-semibold">{resource.title}</h2>
//             <p className="text-gray-600">{resource.description}</p>
//             <a
//               href={resource.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 hover:underline mt-2 inline-block"
//             >
//               Visit
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
