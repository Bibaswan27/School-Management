import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Announcement = () => {
  // State for managing announcement
  const [announcement, setAnnouncement] = useState("");
  const [announcements, setAnnouncements] = useState([]);

  // Function to fetch announcements
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

  return (
    <div className="flex pl-24">
      <div />
      <Sidebar />
      <div className="flex-1 p-2">
        <div className="mb-2">Announcement</div>
        <div className="mb-2" onSubmit={handleSubmit}>
          <div className="mb-1">
            <div className="mb-2">
              Announcement:
            </div>
            <div
              className="w-full p-1 text-2xl"
              id="announcement"
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              required
              rows={4}
              cols={50}
            />
          </div>
          <button className="bg-green-700" type="submit">
            Send Announcement
          </button>
        </div>

        {/* Display Announcements */}
        <h2>Announcements</h2>
        <div>
          {announcements.map((announcement) => (
            <div className="mb-1" key={announcement._id}>
              <div className="text-2xl">
                {announcement.announcement}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
