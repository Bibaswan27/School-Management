// TeacherProfileSection.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';

const TeacherProfileSection = () => {
  const [teacherInfo, setTeacherInfo] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country',
    qualification: 'Master of Education',
  });

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <div>Profile Details</div>
        <div>
          <div>Name:</div>
          <div>{teacherInfo.name}</div>
          <div>Email:</div>
          <div>{teacherInfo.email}</div>
          <div>Phone:</div>
          <div>{teacherInfo.phone}</div>
          <div>Address:</div>
          <div>{teacherInfo.address}</div>
          <div>Qualification:</div>
          <div>{teacherInfo.qualification}</div>
        </div>
        <div>Edit Profile</div>
      </div>
    </div>
  );
};

export default TeacherProfileSection;
