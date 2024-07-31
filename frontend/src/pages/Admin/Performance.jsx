// Performance.js
import React from 'react';
import Sidebar from './Sidebar';
const Performance = () => {
  // Sample data for school performance
  const schoolPerformanceData = {
    averageScore: 85,
    totalStudents: 100,
  };

  // Sample data for individual student performance
  const individualPerformanceData = [
    { id: 1, name: 'John Doe', score: 90 },
    { id: 2, name: 'Jane Smith', score: 85 },
    { id: 3, name: 'Michael Johnson', score: 92 },
  ];

  return (
    <div className="p-1 mb-1">
      <Sidebar /> {/* Include the Sidebar component */}
      <div>
        <div>
          <div>School Performance</div>
          <div>
            <p>Average Score: {schoolPerformanceData.averageScore}</p>
            <p>Total Students: {schoolPerformanceData.totalStudents}</p>
          </div>
          <div>Individual Performance</div>
          <div>
            {individualPerformanceData.map((student) => (
              <p key={student.id}>
                {student.name}: {student.score}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
