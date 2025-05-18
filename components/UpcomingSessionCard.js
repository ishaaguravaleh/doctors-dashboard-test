// components/UpcomingSessionCard.js
import { FiPhone, FiMapPin } from 'react-icons/fi';

export default function UpcomingSessionCard({
  doctorImg,
  name,
  location,
  time,
  duration,
  mode,
  prevDate,
  onComplete
}) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md mx-4 mb-4">
      <div className="flex flex-wrap items-center space-x-4">
        {/* Time and Location Stack */}
        <div className="flex flex-col text-left min-w-[100px]">
          <span className="text-xl font-semibold text-black">{time}</span>
          <span className="text-sm text-gray-500">{location}</span>
        </div>

        {/* Vertical separator line */}
        <div className="border-l border-gray-300 h-12"></div>

        {/* Image and Name Stack */}
        <div className="flex items-center space-x-3 min-w-[150px]">
          <img src={doctorImg} alt={name} className="w-12 h-12 rounded-full" />
          <div className="flex flex-col">
            <h4 className="font-semibold">{name}</h4>
            <button
              className="text-white bg-[#776EA5] hover:bg-blue-500 rounded-full mt-1 p-1 w-6 h-6 flex items-center justify-center"
              aria-label="Call doctor"
            >
              <FiPhone size={14} />
            </button>
          </div>
        </div>
      </div>

      <p className="mt-2 text-sm text-gray-600">Session Duration: {duration}</p>

      <div className="flex items-center text-sm text-gray-600">
        <span className="mr-1">Session Mode: {mode}</span>
        <FiMapPin className="text-white bg-[#776EA5] rounded-full p-1" size={20} />
      </div>

      <div className="flex flex-wrap justify-between items-center mt-3 gap-2">
        <button className="px-4 py-2 bg-purple-500 text-white text-sm rounded-xl">
          Mark as Completed
        </button>
        <div className="text-xs text-gray-500 text-right">
          <p>Previous Session:</p>
          <p>{prevDate}</p>
        </div>

      </div>
    </div>

  );
}
