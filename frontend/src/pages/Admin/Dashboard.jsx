// AdminDashboard.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import EventCalendar from './EventCalender';
import Announcement from './Announcement';
import Performance from './Performance';
import axios from 'axios';

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [studentPerformance, setStudentPerformance] = useState([]);

  useEffect(() => {
    fetchEvents();
    fetchAnnouncements();
    fetchStudentPerformance();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/events/getall');
      setEvents(response.data.events || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/announcements/getall');
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  const fetchStudentPerformance = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/performance/getall');
      setStudentPerformance(response.data.performance || []);
    } catch (error) {
      console.error('Error fetching student performance:', error);
    }
  };

  return (
    <div className="flex pl-20">
      <Sidebar />
      <div isOpen={isOpen}>
        <div>
          <div>
            <div>Overview</div>
            <div>
              <div>
                <div>Total Students</div>
                <div>500</div>
              </div>
              <div>
                <div>Total Teachers</div>
                <div>50</div>
              </div>
              <div>
                <div>Total Classes</div>
                <div>50</div>
              </div>
            </div>
          </div>

          <div>
            <EventCalendar events={events} />
          </div>
        </div>

        <div>
          <Performance studentPerformance={studentPerformance} />
          <Announcement announcements={announcements} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
