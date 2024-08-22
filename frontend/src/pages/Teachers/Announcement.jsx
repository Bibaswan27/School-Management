import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const CheckAnnouncementSection = ({ isOpenDashboard1 }) => {
  const [announcement, setAnnouncement] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState(null);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/announcements/getall"
      );
      setAnnouncements(response.data.announcements);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/announcements",
        {
          announcement: announcement,
        }
      );
      console.log("Announcement sent:", response.data);
      setAnnouncement("");
      fetchAnnouncements();
    } catch (error) {
      console.error("Error sending announcement:", error);
      setError("Error sending announcement");
    }
  };

  return (
    <div className="flex flex-row container mx-auto px-4 py-4">
      {!isOpenDashboard1 && <Sidebar />}

      {/* Announcement Section */}
      <div className="col-span-full md:col-span-8 bg-gray-100 rounded-lg shadow-md px-6 py-8">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800">Announcement</h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="mb-4">
            <textarea
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              placeholder="Enter Announcement..."
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 h-24 resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Send Announcement
          </button>
        </form>
      </div>

      {/* Announcements List (Shifted right) */}
      <div className="col-span-full md:col-span-4 bg-white rounded-lg shadow-md px-6 py-8 ml-auto">
        <h2 className="text-xl font-bold text-gray-800">Announcements</h2>
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div
              key={announcement._id}
              className="border border-gray-200 rounded-lg px-4 py-4 hover:bg-gray-100"
            >
              <div>{announcement.announcement}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckAnnouncementSection;