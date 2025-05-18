'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import UpcomingSessionCard from '../components/UpcomingSessionCard';
import PastSessionCard from '../components/PastSessionCard';
import TimeSlotPanel from '../components/TimeSlotPanel';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function DashboardPage() {
  const [showPanel, setShowPanel] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const router = useRouter();

  const [upcoming, setUpcoming] = useState([
    {
      id: 1,
      doctorImg: '/images/img_1.jpg',
      name: 'Dr. Kiran Rathi',
      location: 'Bandra',
      time: '11:00 AM',
      duration: '01:00 HR',
      mode: 'Online',
      prevDate: 'Tuesday, March 5, 2023',
    },
  ]);

  const [past, setPast] = useState([
    { name: 'Dr. Ramesh Naik', time: '12:00 AM' },
    { name: 'Dr. Suresh Sawant', time: '10:30 AM' },
  ]);

  const handleCompleteSession = (id) => {
    const completed = upcoming.find((s) => s.id === id);
    if (completed) {
      setUpcoming(prev => prev.filter((s) => s.id !== id));
      setPast(prev => [
        {
          name: completed.name,
          time: completed.time,
          prevDate: completed.prevDate,
        },
        ...prev,
      ]);
      toast.success("Session Completed");
    }
  };



  // const past = [
  //   { name: 'Dr. Ramesh Naik', time: '12:00 AM' },
  //   { name: 'Dr. Suresh Sawant', time: '10:30 AM' },
  //   { name: 'Dr. Neeta Singh', time: '09:30 AM' },
  //   { name: 'Dr. Suresh Sawant', time: '10:30 AM' },
  //   { name: 'Dr. Suresh Sawant', time: '10:30 AM' },
  // ];



  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Update on resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleConfirm = () => {
    if (selectedTime) {
      router.push(`/confirm?time=${encodeURIComponent(selectedTime)}`);
    }
  };

  return (
    <main className="min-h-screen w-full bg-[linear-gradient(90deg,_#B0A4F5_0%,_#EDA197_100%)] ">
      <div className="pb-5">
        <Header />
        <SearchBar />
      </div>

      <div className="gradient-bg min-h-screen w-full">

        <section className='p-2' >
          <h3 className="px-4 text-md font-medium mb-2">Upcoming Session</h3>
          {upcoming.map((session) => (
            <UpcomingSessionCard
              key={session.id}
              {...session}
              onComplete={() => handleCompleteSession(session.id)}
            />
          ))}

        </section>

        <section className="mt-8 pb-24">
          <h3 className="px-4 text-md font-medium mb-2">Past Sessions</h3>
          <div className="space-y-4">
            {past.map((s, i) => (
              <PastSessionCard key={i} name={s.name} time={s.time} prevDate={s.prevDate} />
            ))}

          </div>
        </section>
      </div>


      {/* Slide-in Panel */}
      <AnimatePresence>
        {showPanel && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-gray bg-opacity-30 backdrop-blur-sm z-40"
              onClick={() => setShowPanel(false)}
            />

            {/* Sliding Panel */}
            <motion.div
              initial={isMobile ? { y: '100%' } : { x: '-100%' }}
              animate={isMobile ? { y: 0 } : { x: 0 }}
              exit={isMobile ? { y: '100%' } : { x: '-100%' }}
              transition={{ duration: 0.4 }}
              className={`fixed z-50 bg-white shadow-xl 
    ${isMobile
                  ? 'bottom-0 inset-x-0 h-2/3 rounded-t-2xl'
                  : 'top-0 bottom-0 left-0 h-full w-[400px] rounded-none rounded-r-2xl'}
  `}
            >


              <TimeSlotPanel
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
                onCancel={() => setShowPanel(false)}
                onConfirm={handleConfirm}
              />
            </motion.div>

          </>
        )}
      </AnimatePresence>

      {/* Schedule Now Button */}
      <div className="fixed bottom-4 inset-x-0 px-4">
        <button
          onClick={() => setShowPanel(true)}
          className="w-full py-3 bg-purple-500 text-white font-semibold rounded-xl shadow-lg"
        >
          Schedule Now
        </button>
      </div>

      <ToastContainer position="bottom-center" autoClose={2000} />

    </main>
  );
}
