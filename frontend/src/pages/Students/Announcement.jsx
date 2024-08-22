// AnnouncementSection.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

const AnnouncementSection = () => {
  const [announcement, setAnnouncement] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [isDashboard, setIsDashboard] = useState(false);
  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/announcements/getall');
      setAnnouncements(response.data.announcements);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/announcements",
        {
          announcement: announcement, // Ensure that the key matches the backend model
        }
      );
      console.log("Announcement sent:", response.data);
      // Display success toast message
      toast.success("Announcement sent successfully");
      // Clear the form
      setAnnouncement("");
      // Fetch announcements again to update the list
      fetchAnnouncements();
    } catch (error) {
      console.error("Error sending announcement:", error);
      // Display error toast message
      toast.error("Error sending announcement");
    }
  };

  useEffect(() => {
    const isOnDashboard = window.location.pathname === "/student/dashboard"; // Example check
    setIsDashboard(isOnDashboard);
  }, []);

  return (
    <div className="flex flex-row bg-gray-100 rounded-lg shadow-md p-4">
      {!isDashboard && <Sidebar />}
      <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Announcements</h2> {/* Centered heading */}

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label
            htmlFor="announcement"
            className="text-lg font-medium mb-1 text-gray-700"
          >
            Announcement:
          </label>
          <textarea
            id="announcement"
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
            required
            rows={4}
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded font-bold focus:outline-none focus:ring focus:ring-blue-500"
        >
          Send Announcement
        </button>
      </form>

      <div className="mt-4">
        <h2>Existing Announcements</h2>
        <div className="flex flex-col space-y-2">
          {announcements.map((announcement) => (
            <div
              key={announcement._id}
              className="bg-white rounded-md shadow-sm p-4 flex justify-between items-center"
            >
              <div className="text-lg">{announcement.announcement}</div>
              {/* Add an icon for visual interest (optional) */}
            </div>
          ))}
        </div>
      </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AnnouncementSection;
