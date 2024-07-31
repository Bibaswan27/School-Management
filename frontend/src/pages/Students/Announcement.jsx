// AnnouncementSection.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

const AnnouncementSection = () => {
  const [announcements, setAnnouncements] = useState([]);

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

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <div>Announcements</div>
        <div>
          {announcements.map((announcement) => (
            <div key={announcement._id}>
              <div>{announcement.announcement}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementSection;
