// SettingsProfile.js
import React from 'react';
import Sidebar from './Sidebar';
const SettingsProfile = () => {
  const teacherInfo = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country',
    qualification: 'Master of Education',
  };

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
        <button>Edit Profile</button>
      </div>
    </div>
  );
};

export default SettingsProfile;
