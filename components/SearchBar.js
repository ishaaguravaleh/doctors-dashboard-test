// components/SearchBar.js
import { FaFilter, FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  return (
    <div className="flex items-center gap-2 px-4">
      <div className="flex-1 relative">
        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search Psychologists..."
          className="w-full pl-3 pr-4 py-2 rounded-xl shadow-sm bg-[#FFFFFFCC] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
        />
      </div>
      <button className="p-2 bg-white rounded-lg shadow-md">
        <FaFilter />
      </button>
    </div>
  );
}
