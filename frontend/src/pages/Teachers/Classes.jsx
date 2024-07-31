// ClassSection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';



const ClassSection = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/class/getall');
      if (response.data && Array.isArray(response.data.classes)) {
        setClasses(response.data.classes);
      } else {
        console.error('Error fetching classes: Invalid data format', response.data);
      }
    } catch (error) {
      console.error('Error fetching classes:', error.message);
    }
  };

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <div>Classes</div>
        <div>
          {classes.map((classItem, index) => (
            <div key={index}>
              <h3>{classItem.grade}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassSection;
