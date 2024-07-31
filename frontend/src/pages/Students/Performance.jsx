// PerformanceSection.js
import React from 'react';
import Sidebar from './Sidebar';
import { Line } from 'react-chartjs-2';

const PerformanceSection = () => {
  // Sample performance data
  const performanceData = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    marks: [80, 85, 90, 88, 92, 85], // Sample marks for each month
    totalMarks: 520 // Sample total marks for the year
  };

  // Line chart data
  const lineChartData = {
    labels: performanceData.months,
    datasets: [
      {
        label: 'Performance Trends',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        data: performanceData.marks
      }
    ]
  };

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <div>Performance</div>
        <div>
          <div>
            <Line
              data={lineChartData}
              options={{
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                  }]
                }
              }}
            />
          </div>
          <div>Total Marks: {performanceData.totalMarks}</div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
