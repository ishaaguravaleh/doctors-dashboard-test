'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSearch, FaSlidersH } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FiChevronLeft } from 'react-icons/fi';

const doctors = [
    {
        name: "Dr. Tejas Sharma",
        phone: "+91 98765 43210",
        expertise: "Gynaecology",
        gender: "Male",
        sessionMode: "In-Person & Online",
        sessionFee: "₹1,500/-",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Dr. Priya Kapoor",
        phone: "+91 98765 43210",
        expertise: "IVF Specialist",
        gender: "Female",
        sessionMode: "Online Only",
        sessionFee: "₹1,200/-",
        img: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
        name: "Dr. Pranav Saxena",
        phone: "+91 98765 43210",
        expertise: "Gynaecology",
        gender: "Male",
        sessionMode: "In-Person Only",
        sessionFee: "₹1,000/-",
        img: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
        name: "Dr. Toshit Bagde",
        phone: "+91 98765 43210",
        expertise: "Psychologist",
        gender: "Male",
        sessionMode: "Online & In-Person",
        sessionFee: "₹1,400/-",
        img: "https://randomuser.me/api/portraits/men/52.jpg",
    },
];

export default function DoctorsPage() {
    const [openIndex, setOpenIndex] = useState(null);
    const router = useRouter();

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleBook = () => {
        toast.success('Doctor has been booked');
        setTimeout(() => {
            router.push('/');
        }, 1500);
    };

    return (
        <div className="min-h-screen px-4 py-6"

            style={{
                background: `linear-gradient(180deg, #DFDAFB 0%, #F9CCC5 100%)`,
            }}
        >
            <ToastContainer />
            {/* <h2 className="text-lg font-semibold mb-4 text-[#2C2C2C]">Available Doctors</h2> */}

            <div className="flex items-center space-x-2 mb-4">
                <button onClick={() => router.back()} className="text-gray-600">
                    <FiChevronLeft size={20} />
                </button>
                <h1 className="text-lg font-semibold  text-[#2C2C2C]">Available Doctors</h1>
            </div>

            {/* Search & Filter */}
            <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center bg-white rounded-lg shadow px-3 py-2 w-full">
                    <FaSearch className="text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Search Psychologists..."
                        className="outline-none w-full bg-transparent text-sm"
                    />
                </div>
                <button className="p-3 rounded-lg bg-white shadow text-gray-500">
                    <FaSlidersH />
                </button>
            </div>

            {/* Doctor Cards */}
            {doctors.map((doc, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-4 mb-4 flex flex-col"
                >
                    <div className="flex items-center gap-3  cursor-pointer" onClick={() => handleToggle(index)}>
                        <img
                            src={doc.img}
                            alt={doc.name}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="font-semibold text-md">{doc.name}</h3>
                            <p className="text-sm text-gray-500">{doc.phone}</p>
                            <p className="text-sm text-gray-500">{doc.expertise}</p>

                        </div>
                        <div className="ml-auto text-gray-400 text-xl">
                            {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                        </div>
                    </div>



                    {openIndex === index && (
                        <>
                            <div className="text-md text-black grid grid-cols-2 mb-1 mt-4 font-semibold">
                                <span >Expertise</span>
                                <span className="text-right">Gender</span>
                            </div>
                            <div className="text-sm grid grid-cols-2 mb-3 text-gray-400">
                                <span >{doc.expertise}</span>
                                <span className="text-right">{doc.gender}</span>
                            </div>
                            <div className="text-md text-black grid grid-cols-2 mb-1 font-semibold">
                                <span>Session mode</span>
                                <span className="text-right">Session Fee</span>
                            </div>
                            <div className="text-sm font-medium grid grid-cols-2 text-gray-400">
                                <span>{doc.sessionMode}</span>
                                <span className="text-right">{doc.sessionFee}</span>
                            </div>
                            <button
                                onClick={handleBook}
                                style={{ background: 'linear-gradient(90deg, #BBA3E4 0%, #E7A1A0 100%)' }}
                                className="mt-4 w-full py-2 rounded-lg text-white font-semibold"
                            >
                                Book Now
                            </button>

                        </>
                    )}
                </div>
            ))}
        </div>
    );
}
