// StudentDashboard.js
import React from 'react';
import Sidebar from './Sidebar';

const StudentDashboard = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <div>
          <div>Overview</div>
          <div>
            <div>
              <div>Assignments</div>
              <div>5</div>
            </div>
            <div>
              <div>Performance</div>
              <div>500</div>
            </div>
            <div>
              <div>Term</div>
              <div>1</div>
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

export default StudentDashboard;
