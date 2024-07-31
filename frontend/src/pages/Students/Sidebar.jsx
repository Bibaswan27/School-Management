
import React, { useState } from 'react';
import { BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCalendarEvent, BsQuestionSquare } from 'react-icons/bs';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }; 
  return (
    <div style={{ width: isOpen ? '250px' : '80px' }}>
        <div>
        <Logo alt="Logo" />
      </div>
      <div>Student</div>
      <div>
        <div className="flex items-center py-4 px-8 text-xl border-b border-gray-700 hover:bg-gray-700 hover:text-white">
          <div><BsGraphUp /></div>
          <div to="/student/dashboard">Dashboard</div>
        </div>
        <div className="flex items-center py-4 px-8 text-xl border-b border-gray-700 hover:bg-gray-700 hover:text-white">
          <div><BsFileText /></div>
          <div to="/student/assignments">Assignments</div>
        </div>
        <div className="flex items-center py-4 px-8 text-xl border-b border-gray-700 hover:bg-gray-700 hover:text-white">
          <div><BsBook /></div>
          <div to="/student/exams">Exams</div>
        </div>
        <div className="flex items-center py-4 px-8 text-xl border-b border-gray-700 hover:bg-gray-700 hover:text-white">
          <div><BsGraphDown /></div>
          <div to="/student/performance">Performance</div>
        </div>
        <div className="flex items-center py-4 px-8 text-xl border-b border-gray-700 hover:bg-gray-700 hover:text-white">
          <div><BsCalendar /></div>
          <div to="/student/attendance">Attendance</div>
        </div>
        <div className="flex items-center py-4 px-8 text-xl border-b border-gray-700 hover:bg-gray-700 hover:text-white">
        <div><BsBook /></div>
          <div to="/student/library">Library </div>
        </div>
        <div className="flex items-center py-4 px-8 text-xl border-b border-gray-700 hover:bg-gray-700 hover:text-white">
          <div><BsChatDots /></div>
          <div to="/student/communication">Announcement</div>
        </div>
        <div className="flex items-center py-4 px-8 text-xl border-b border-gray-700 hover:bg-gray-700 hover:text-white">
          <div><BsGear /></div>
          <div to="/student/settings">Settings & Profile</div>
        </div>
        
      </div>
      <button className="absolute top-20 right-0 w-10 h-10 bg-gray-700 rounded-full cursor-pointer flex items-center justify-center" onClick={toggleSidebar}>
        <div isOpen={isOpen}>▲</div>
      </button>
    </div>
  );
};

export default Sidebar;