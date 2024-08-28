import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import EventCalendar from "./EventCalender";
import Announcement from "./Announcement";
import axios from "axios";

const AdminDashboard = () => {
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
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1 overflow-auto p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="text-xl font-bold mb-2">Overview</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="mr-2 text-gray-500">Total Students</div>
                <div className="text-lg font-semibold">500</div>
              </div>
              <div className="flex items-center">
                <div className="mr-2 text-gray-500">Total Teachers</div>
                <div className="text-lg font-semibold">50</div>
              </div>
              <div className="flex items-center">
                <div className="mr-2 text-gray-500">Total Classes</div>
                <div className="text-lg font-semibold">50</div>
              </div>
            </div>
          </div>
          <div className="col-span-full md:col-span-1 bg-white rounded-lg shadow-md p-4">
            <EventCalendar events={events} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <Announcement announcements={announcements} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
