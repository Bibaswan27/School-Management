// AttendanceSection.js
import React from 'react';
import Sidebar from './Sidebar';

const AttendanceSection = () => {
  // Sample attendance data
  const attendance = [
    { id: 1, date: '2024-05-01', present: true },
    { id: 2, date: '2024-05-02', present: false },
    { id: 3, date: '2024-05-03', present: true },
    { id: 4, date: '2024-05-04', present: true },
    { id: 5, date: '2024-05-05', present: true }
  ];

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <div>Attendance</div>
        <div>
          {attendance.map(({ id, date, present }) => (
            <div key={id}>
              <div>{date}</div>
              <div present={present}>{present ? 'Present' : 'Absent'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceSection;
