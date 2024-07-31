// ProfileSection.js
import React from 'react';
import Sidebar from './Sidebar';


const ProfileSection = () => {
  // Sample student profile data
  const studentProfile = {
    name: 'John Doe',
    age: 18,
    grade: '12th',
    school: 'Example High School',
    email: 'john.doe@example.com'
  };

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <div>Profile</div>
        <div>
          <div>
            <div>Name:</div>
            <div>{studentProfile.name}</div>
          </div>
          <div>
            <div>Age:</div>
            <div>{studentProfile.age}</div>
          </div>
          <div>
            <div>Grade:</div>
            <div>{studentProfile.grade}</div>
          </div>
          <div>
            <div>School:</div>
            <div>{studentProfile.school}</div>
          </div>
          <div>
            <div>Email:</div>
            <div>{studentProfile.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
