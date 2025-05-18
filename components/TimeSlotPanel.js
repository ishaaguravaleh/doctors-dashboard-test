'use client';

import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function TimeSlotPanel({
    selectedTime,
    setSelectedTime,
    onCancel,
    onConfirm,
}) {
    const [expandedGroup, setExpandedGroup] = useState(null);

    const timeSlots = {
        Morning: ['08:00 AM', '09:00 AM', '10:00 AM', , '11:00 AM'],
        Afternoon: ['12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM'],
        Evening: ['04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'],
        Night: ['08:00 PM', '09:00 PM', '10:00 PM',],
    };

    const toggleGroup = (period) => {
        setExpandedGroup((prev) => (prev === period ? null : period));
    };

    return (
        <div className="flex flex-col h-full p-4 " style={{
            background: `linear-gradient(180deg, #DFDAFB 0%, #F9CCC5 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))`
        }}>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Select Session Time</h2>
                <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={onCancel}
                >
                    <IoClose size={24} />
                </button>
            </div>

            {/* Time Period Cards */}
            <div className="space-y-4 overflow-y-auto flex-1">
                {Object.entries(timeSlots).map(([period, times]) => {
                    const isOpen = expandedGroup === period;

                    return (
                        <div
                            key={period}
                            className="border border-gray-200 rounded-lg shadow-sm"
                        >
                            {/* Card Header */}
                            <div
                                onClick={() => toggleGroup(period)}
                                className="flex items-center justify-between px-4 py-3 cursor-pointer bg-gray-50 rounded-t-lg hover:bg-gray-100"
                            >
                                <h3 className="font-medium text-gray-700">{period}</h3>
                                {isOpen ? (
                                    <FiChevronUp size={18} className="text-gray-500" />
                                ) : (
                                    <FiChevronDown size={18} className="text-gray-500" />
                                )}
                            </div>

                            {/* Time Slots Grid */}
                            {isOpen && (
                                <div className="px-4 py-4 bg-white rounded-b-lg grid grid-cols-3 gap-3">
                                    {times.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`text-sm border rounded-md px-3 py-2 transition font-medium ${selectedTime === time
                                                ? 'bg-pink-100 border-pink-500 text-pink-600'
                                                : 'bg-white border-[#CC627B] text-gray-700 hover:border-purple-400'
                                                }`}

                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>


            {/* Cancel and Confirm Buttons */}
            <div className="mt-6 flex justify-between gap-4">
                <button
                    onClick={onCancel}
                    className="w-1/2 py-3 rounded-lg font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 border border-gray-300"
                >
                    Cancel
                </button>
                <button
                    onClick={onConfirm}
                    disabled={!selectedTime}
                    className={`w-1/2 py-3 rounded-lg font-semibold shadow-sm transition ${selectedTime
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-purple-400 text-white cursor-not-allowed'
                        }`}
                >
                    Confirm
                </button>
            </div>

        </div>
    );
}
