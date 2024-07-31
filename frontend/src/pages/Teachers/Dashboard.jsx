// TeacherDashboard.js
import React from 'react';
import Sidebar from './Sidebar';


const TeacherDashboard = () => {
  return (
    <div>
      <Sidebar />
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
          <div>Recent Activity</div>
          {/* Add a list of recent activity items */}
        </div>

        <div>
          <div>Upcoming Events</div>
          {/* Add a calendar or list of upcoming events */}
        </div>

        {/* Add more sections for other parts of the admin dashboard */}
      </div>
    </div>
  );
};

export default TeacherDashboard;
