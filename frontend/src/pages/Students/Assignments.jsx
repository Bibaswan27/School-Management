// StudentAssignments.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/assignments/getall');
      setAssignments(response.data.assignments);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  };

  const handleDoAssignment = (id) => {
    // Implement your logic for handling assignment submission
  };

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <h1>Assignments</h1>
        {assignments.map((assignment) => (
          <div key={assignment.id}>
            <div>{assignment.title}</div>
            <div>{assignment.description}</div>
            {!assignment.done ? (
              <div onDoAssignment={() => handleDoAssignment(assignment.id)} />
            ) : (
              <div>Assignment Done</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const AssignmentForm = ({ onDoAssignment }) => {
  const [opinion, setOpinion] = useState('');

  const handleInputChange = (event) => {
    setOpinion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (opinion.trim() !== '') {
      onDoAssignment();
    } else {
      alert("Please provide your opinion/assignment.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={opinion} onChange={handleInputChange} placeholder="Enter your opinion/assignment..." />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentAssignments;
