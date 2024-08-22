import React from "react";
import { Link } from 'react-router-dom';
import {
  BsGraphUp,
  BsPeople,
  BsPerson,
  BsFileText,
  BsBook,
  BsCalendar,
  BsGear,
  BsChatDots,
  BsCalendarEvent,
  BsQuestionSquare,
} from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="w-1/6 bg-blue-900 text-white">
      <div className="flex flex-col h-full">
        <Link to="/admin/dashboard" className="flex items-center py-4 px-8 text-xl border-b border-gray-400 hover:bg-gray-700 hover:text-white">
          <BsGraphUp />
          <span className="ml-2">Dashboard</span>
        </Link>
        <Link to="/admin/classes" className="flex items-center py-4 px-8 text-xl border-b border-gray-400 hover:bg-gray-700 hover:text-white">
          <BsPeople />
          <span className="ml-2">Classes</span>
        </Link>
        <Link to="/admin/students" className="flex items-center py-4 px-8 text-xl border-b border-gray-400 hover:bg-gray-700 hover:text-white">
          <BsPeople />
          <span className="ml-2">Students</span>
        </Link>
        <Link to="/admin/teachers" className="flex items-center py-4 px-8 text-xl border-b border-gray-400 hover:bg-gray-700 hover:text-white">
          <BsPerson />
          <span className="ml-2">Teachers</span>
        </Link>
        <Link to="/admin/assignments" className="flex items-center py-4 px-8 text-xl border-b border-gray-400 hover:bg-gray-700 hover:text-white">
          <BsFileText />
          <span className="ml-2">Assignments</span>
        </Link>
        <Link to="/admin/exams" className="flex items-center py-4 px-8 text-xl border-b border-gray-400 hover:bg-gray-700 hover:text-white">
          <BsBook />
          <span className="ml-2">Exams</span>
        </Link>
        <Link to="/admin/attendance" className="flex items-center py-4 px-8 text-xl border-b border-gray-400 hover:bg-gray-700 hover:text-white">
          <BsCalendar />
          <span className="ml-2">Attendance</span>
        </Link>
        <Link to="/admin/library" className="flex items-center py-4 px-8 text-xl border-b border-gray-400 hover:bg-gray-700 hover:text-white">
          <BsBook />
          <span className="ml-2">Library</span>
        </Link>
        <Link to="/admin/communication" className="flex items-center py-4 px-8 text-xl border-b border-gray-400 hover:bg-gray-700 hover:text-white">
          <BsChatDots />
          <span className="ml-2">Announcement</span>
        </Link>
        <Link to="/admin/events" className="flex items-center py-4 px-8 text-xl border-b border-gray-400 hover:bg-gray-700 hover:text-white">
          <BsCalendarEvent />
          <span className="ml-2">Events & Calendar</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

