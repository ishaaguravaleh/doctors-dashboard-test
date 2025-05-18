// components/PastSessionCard.js
export default function PastSessionCard({
  name,
  time,
  prevDate = 'Tuesday, March 5, 2023',
}) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md mx-4 mb-4 flex items-center">
      {/* Time */}
      <span className="text-md font-semibold text-gray-500 min-w-[80px]">{time}</span>

      {/* Vertical separator line */}
      <div className="border-l border-gray-300 h-10 mx-4"></div>

      {/* Name and Previous Session Date */}
      <div className="flex flex-col">
        <h4 className="font-medium">{name}</h4>
        <div className="text-xs text-gray-500 mt-1">
          <p>Previous Session:</p>
          <p>{prevDate}</p>
        </div>
      </div>
    </div>
  );
}
