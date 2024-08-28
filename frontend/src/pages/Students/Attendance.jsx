import React from 'react';
import Sidebar from './Sidebar';

const AttendanceSection = () => {
  // Sample attendance data
  const attendance = [
    { id: 1, date: '2024-05-01', present: true },
    { id: 2, date: '2024-05-02', present: false },
    { id: 3, date: '2024-05-03', present: true },
    { id: 4, date: '2024-05-04', present: true },
    { id: 5, date: '2024-05-05', present: true },
  ];

  return (
    <div className="attendance-container">
      <div className="flex">
        <Sidebar />
        <div className="attendance-wrapper px-4 py-4 bg-gray-100 rounded-md">
          <h2 className="text-xl font-bold mb-2">Attendance</h2>
          <div className="attendance-list">
            {attendance.map(({ id, date, present }) => (
              <div key={id} className="attendance-item flex justify-between items-center py-2 border-b border-gray-200">
                <div className="text-base">{date}</div>
                <div className={`text-base ${present ? 'text-green-500' : 'text-red-500'}`}>
                  {present ? 'Present' : 'Absent'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSection;