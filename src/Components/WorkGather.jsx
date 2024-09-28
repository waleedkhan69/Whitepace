import React from 'react';

const WorkTogether = () => {
  return (
    <div className="flex flex-col lg:flex-row   items-center justify-center lg:h-[70vh] h-auto  p-4">
      <div className="flex-shrink-0 mb-8  lg:mb-0 lg:mr-8 h-64 w-64 ">
        <svg className="w-full h-full " viewBox="0 0 200 200">
          
        <circle cx="100" cy="100" r="90" fill="none" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />

          
          {/* Dots */}
          <circle cx="100" cy="10" r="8" fill="#FCD34D" /> {/* Yellow */}
          <circle cx="170" cy="50" r="8" fill="#34D399" /> {/* Green */}
          <circle cx="190" cy="130" r="8" fill="#60A5FA" /> {/* Light Blue */}
          <circle cx="130" cy="190" r="8" fill="#60A5FA" /> {/* Light Blue */}
          <circle cx="50" cy="170" r="8" fill="#F87171" /> {/* Red */}
          <circle cx="10" cy="100" r="8" fill="#60A5FA" /> {/* Light Blue */}
          <circle cx="50" cy="30" r="8" fill="#34D399" /> {/* Green */}
          <circle cx="100" cy="100" r="12" fill="#3B82F6" /> {/* Dark Blue (Center) */}
          <circle cx="140" cy="70" r="8" fill="#FCD34D" /> {/* Yellow */}
          <circle cx="140" cy="70" r="8" fill="#FCD34D" /> {/* Yellow */}
          
          {/* Navigation icon (simplified) */}
          <path d="M95 97 L105 97 L100 107 Z" fill="" />
        </svg>
      </div>
      <div className="max-w-2xl w-full md:w-[60%] lg:w-[50%] p-3 ">
        <h1 className="text-4xl font-bold mb-4">Work together</h1>
        <p className="text-gray-600 mb-6">
            With Whitepace share your photo with your colleges  and collaborate with them . You can also Publish a note to internet and the the URL with others.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
          Try it now
        </button>
      </div>
    </div>
  );
};

export default WorkTogether;
