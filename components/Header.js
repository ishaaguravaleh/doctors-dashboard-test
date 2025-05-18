// components/Header.js
import { FaUserCircle } from 'react-icons/fa';

export default function Header({ name = 'Manjunath Naik' }) {
  return (
    <header className="flex justify-between items-center px-4 py-6">
      <div>
        <p className="text-sm text-white">Good morning,</p>
        <h1 className="text-xl font-semibold text-white">{name}</h1>
      </div>
      <FaUserCircle className="text-3xl text-gray-700" />
    </header>
  );
}
