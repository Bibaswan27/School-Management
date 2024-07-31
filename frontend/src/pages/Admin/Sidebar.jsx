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
    <div>
    <div className="flex items-center py-4 px-8 text-xl border-b border-gray-700 hover:bg-gray-700 hover:text-white">
          <div><BsGraphUp /></div>
          <div to="/teacher/dashboard">Dashboard</div>
        </div>
        <div className="flex items-center py-4 px-8 text-xl border-b border-gray-700 hover:bg-gray-700 hover:text-white">
          <div><BsPeople /></div>
          <div to="/teacher/classes">Classes</div>
        </div>
        <div className="flex items-center py-4 px-8 text-xl border-b border-gray-700 hover:bg-gray-700 hover:text-white">
          <div><BsPeople /></div>
          <div to="/teacher/students">Students</div>
        </div>
        <div className="flex items-center py-4 px-8 text-xl border-b border-gray-700 hover:bg-gray-700 hover:text-white">
          <div><BsPerson /></div>
          <div to="/teacher/teachers">Teachers</div>
        </div>
        <div className="flex items-center py-4 px-8 text-xl border-b border-gray-700 hover:bg-gray-700 hover:text-white">
          <div><BsFileText /></div>
          <div to="/teacher/assignments">Assignments</div>
        </div>
        <div className="flex items-center py-4 px-8 text-xl border-b border-gray-700 hover:bg-gray-700 hover:text-white">
          <div><BsBook /></div>
          <div to="/teacher/exams">Exams</div>
        </div>
        <div className="flex items-center py-4 px-8 text-xl border-b border-gray-700 hover:bg-gray-700 hover:text-white">
          <div><BsGraphDown /></div>
          <div to="/teacher/performance">Performance</div>
        </div>
        <div className="flex items-center py-4 px-8 text-xl border-b border-gray-700 hover:bg-gray-700 hover:text-white">
          <div><BsCalendar /></div>
          <div to="/teacher/attendance">Attendance</div>
        </div>
        <div className="flex items-center py-4 px-8 text-xl border-b border-gray-700 hover:bg-gray-700 hover:text-white">
          <div><BsBook /></div>
          <div to="/admin/library">Library</div>
        </div>
        <div className="flex items-center py-4 px-8 text-xl border-b border-gray-700 hover:bg-gray-700 hover:text-white">
          <div><BsChatDots /></div>
          <div to="/teacher/communication">Announcement</div>
        </div>
        <div className="flex items-center py-4 px-8 text-xl border-b border-gray-700 hover:bg-gray-700 hover:text-white">
          <div><BsCalendarEvent /></div>
          <div to="/teacher/events">Events & Calendar</div>
        </div>
        <div className="flex items-center py-4 px-8 text-xl border-b border-gray-700 hover:bg-gray-700 hover:text-white">
          <div><BsGear /></div>
          <div to="/teacher/settings">Settings & Profile</div>
        </div>
        </div>
      <button onClick={toggleSidebar}>
        <div isOpen={isOpen}>▲</div>
      </button>
    </div>
  );
};

export default Sidebar;
       
       