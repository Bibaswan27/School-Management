import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import EventSection from "./Events";
import Announcement from "./Announcement";
import axios from "axios";
import isOpenDashboard from "./Events";
import isOpenDashboard1 from "./Announcement"

const TeacherDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchEvents();
    fetchAnnouncements();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/events/getall"
      );
      setEvents(response.data.events || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/announcements/getall"
      );
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-lg font-semibold">Overview</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-center">
                <div className="text-gray-500">Total Students</div>
                <div className="text-lg font-bold ml-2">500</div>
              </div>
              <div className="flex items-center">
                <div className="text-gray-500">Total Teachers</div>
                <div className="text-lg font-bold ml-2">50</div>
              </div>
              <div className="flex items-center">
                <div className="text-gray-500">Total Classes</div>
                <div className="text-lg font-bold ml-2">50</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-lg font-semibold">Recent Activity</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="col-span-full md:col-span-1 bg-white rounded-lg shadow-md p-4">
              <EventSection events={events} isOpenDashboard={isOpenDashboard} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <Announcement announcements={announcements} isOpenDashboard1={isOpenDashboard1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
