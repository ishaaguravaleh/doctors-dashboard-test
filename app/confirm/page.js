'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FiChevronLeft } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SchedulePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [sessionMode, setSessionMode] = useState('In-Person');
  const [sessionDate, setSessionDate] = useState('');
  const [sessionTime, setSessionTime] = useState('');
  const [sessionDetails, setSessionDetails] = useState('');

  useEffect(() => {
    const selectedTime = searchParams.get('time');
    if (selectedTime) {
      setSessionTime(selectedTime);
    }
  }, [searchParams]);

  const handleConfirm = () => {
    if (sessionTime && sessionDate) {
      toast.success('Session scheduled successfully!', {
        position: 'top-center',
        autoClose: 2000,
        onClose: () => router.push('/doctors-page'),
      });
    } else {
      toast.error('Please select both date and time.', {
        position: 'top-center',
      });
    }
  };

  const [patient] = useState({
    name: 'Shubham Naik',
    phone: '+91 98765 43210',
  });

  const [practitioner] = useState({
    name: 'Saria Dilon',
    phone: '+91 98765 43210',
  });

  return (
    <div
      className="min-h-screen  md:px-8 flex flex-col items-center relative"
      style={{
        background: `linear-gradient(180deg, #DFDAFB 0%, #F9CCC5 100%)`,
      }}
    >
      <ToastContainer />

      <div className="w-full p-6">
        <div className="flex items-center space-x-2 mb-4">
          <button onClick={() => router.back()} className="text-gray-600">
            <FiChevronLeft size={20} />
          </button>
          <h1 className="text-lg font-semibold  text-[#2C2C2C]">Schedule Session</h1>
        </div>

        {/* Patient Info */}
        <div className="w-full">
          <h2 className="text-md text-gray-500 mb-3">Patient</h2>
          <div className="bg-white w-full p-2 rounded-lg shadow-sm mb-6">
            <div className="flex items-center">
              <FaUserCircle size={40} className="text-gray-500 mr-4 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="font-medium text-gray-700">{patient.name}</span>
                <span className="text-gray-500 text-sm">{patient.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Practitioner Info */}
        <div className="w-full">
          <h2 className="text-md text-gray-500 mb-3">Assign Practitioner</h2>
          <div className="bg-white w-full p-2 rounded-lg shadow-sm mb-6">
            <div className="flex items-center">
              <FaUserCircle size={40} className="text-gray-500 mr-4 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="font-medium text-gray-700">{practitioner.name}</span>
                <span className="text-gray-500 text-sm">{practitioner.phone}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Session Type */}
          <div>
            <label className="block text-md text-gray-500 mb-1">Session Type</label>
            <select
              value={sessionMode}
              onChange={(e) => setSessionMode(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg p-2 mt-2"
            >
              <option>Counselling (1 hour)</option>
              <option>Therapy</option>
            </select>
          </div>

          {/* Session Mode */}
          <div>
            <label className="block text-md text-gray-500 mb-1">Session Mode</label>
            <div className="flex items-center space-x-6 mt-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="In-Person"
                  checked={sessionMode === 'In-Person'}
                  onChange={(e) => setSessionMode(e.target.value)}
                  className="form-radio text-black"
                />
                <span className="text-gray-700">In-Person</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Online"
                  checked={sessionMode === 'Online'}
                  onChange={(e) => setSessionMode(e.target.value)}
                  className="form-radio text-black"
                />
                <span className="text-gray-700">Online</span>
              </label>
            </div>
          </div>

          {/* Date and Time */}
          <div className="flex flex-row gap-4">
            <div className="w-1/2">
              <label className="block text-md text-gray-500 mb-1">Session Date</label>
              <input
                type="date"
                value={sessionDate}
                onChange={(e) => setSessionDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 bg-white"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-md text-gray-500 mb-1">Session Time</label>
              <input
                type="text"
                value={sessionTime}
                onChange={(e) => setSessionTime(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 bg-white"
                placeholder="Select time slot"
              />
            </div>
          </div>

          {/* Online Link */}
          {sessionMode === 'Online' && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Online Session Link</label>
              <input
                type="text"
                value="https://zoom.us/j/1234567890"
                readOnly
                className="w-full border border-gray-300 rounded-lg p-2 bg-white cursor-not-allowed text-gray-700"
              />
            </div>
          )}

          {/* Details */}
          <div>
            <label className="block text-md text-gray-500 mb-1">Session Details (optional)</label>
            <textarea
              value={sessionDetails}
              onChange={(e) => setSessionDetails(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 bg-white"
              rows={3}
              placeholder="Session description or notes..."
            />
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700"
          >
            Confirm Session
          </button>
        </div>
      </div>
    </div>
  );
}
