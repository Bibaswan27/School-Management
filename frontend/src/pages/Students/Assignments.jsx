import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/assignments/getall"
      );
      setAssignments(response.data.assignments);
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  const handleDoAssignment = async (id) => {
    try {
      // Send request to mark assignment as done
      const response = await axios.put(
        `http://localhost:4000/api/v1/assignments/${id}/done`
      );

      // Update assignments state locally (optional)
      setAssignments(
        assignments.map((assignment) =>
          assignment.id === id ? { ...assignment, done: true } : assignment
        )
      );

      // Display success toast
      toast.success("Assignment submitted successfully!");
    } catch (error) {
      console.error("Error submitting assignment:", error);
      // Display error toast (optional)
      toast.error("An error occurred while submitting the assignment.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-4 bg-gray-100 rounded-lg shadow-md">
      <ToastContainer />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full px-4">
          <h1 className="text-2xl font-bold mb-4">Assignments</h1>
          {!assignments.length && (
            <p>No assignments available yet.</p>
          )}
          {assignments.map((assignment) => (
            <div key={assignment.id} className="mb-8 border border-gray-200 rounded-lg p-4">
              <div className="font-bold mb-2 break-words">
                {assignment.title}
              </div>
              <div>{assignment.description}</div>
              {!assignment.done ? (
                <AssignmentForm onDoAssignment={() => handleDoAssignment(assignment.id)} />
              ) : (
                <div className="text-green-500">Assignment Done</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AssignmentForm = ({ onDoAssignment }) => {
  const [opinion, setOpinion] = useState("");

  const handleInputChange = (event) => {
    setOpinion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (opinion.trim() !== "") {
      onDoAssignment();
    } else {
      alert("Please provide your opinion/assignment.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <textarea
        value={opinion}
        onChange={handleInputChange}
        placeholder="Enter your opinion/assignment..."
        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 h-24"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
    </form>
  );
};

export default StudentAssignments;