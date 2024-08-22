import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsGraphUp, BsFileText, BsBook, BsGraphDown, BsCalendar, BsChatDots, BsGear } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div className={`w-64 bg-blue-900 text-white transition-all duration-300 ease-in-out 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center py-4 px-8 text-xl border-b border-gray-400 hover:bg-gray-700 hover:text-white">
          <BsGraphUp />
          <Link to="/student/dashboard" className="ml-2">Dashboard</Link>
        </div>
        <Link to="/student/assignments" className="flex items-center py-4 px-8 text-xl border-b border-gray-400 hover:bg-gray-700 hover:text-white">
          <BsFileText />
          <span className="ml-2">Assignments</span>
        </Link>
        <Link to="/student/exams" className="flex items-center py-4 px-8 text-xl border-b border-gray-400 hover:bg-gray-700 hover:text-white">
          <BsBook />
          <span className="ml-2">Exams</span>
        </Link>
        <Link to="/student/attendance" className="flex items-center py-4 px-8 text-xl border-b border-gray-400 hover:bg-gray-700 hover:text-white">
          <BsCalendar />
          <span className="ml-2">Attendance</span>
        </Link>
        <Link to="/student/library" className="flex items-center py-4 px-8 text-xl border-b border-gray-400 hover:bg-gray-700 hover:text-white">
          <BsBook />
          <span className="ml-2">Library</span>
        </Link>
        <Link to="/student/communication" className="flex items-center py-4 px-8 text-xl border-b border-gray-400 hover:bg-gray-700 hover:text-white">
          <BsChatDots />
          <span className="ml-2">Announcement</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
