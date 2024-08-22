import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const AssignmentSection = () => {
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    grade: "",
    deadline: "",
  });
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

  const handleAddAssignment = async (e) => {
    e.preventDefault();
    if (
      newAssignment.title.trim() !== "" &&
      newAssignment.description.trim() !== "" &&
      newAssignment.grade.trim() !== "" &&
      newAssignment.deadline.trim() !== ""
    ) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/assignments",
          newAssignment
        );
        setAssignments([...assignments, response.data.assignment]);
        setNewAssignment({
          title: "",
          description: "",
          grade: "",
          deadline: "",
        });
      } catch (error) {
        console.error("Error adding assignment:", error);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-4">
      {" "}
      {/* Added container for layout and padding */}
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full px-4">
          {" "}
          {/* Full width for main content */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold mb-2">Assignments</h1>{" "}
            {/* Added heading styles */}
            <form
              onSubmit={handleAddAssignment}
              className="flex flex-col space-y-2 border border-gray-200 rounded-lg px-4 py-4"
            >
              {" "}
              {/* Styled and padded form */}
              <input
                type="text"
                placeholder="Enter assignment title"
                value={newAssignment.title}
                onChange={(e) =>
                  setNewAssignment({ ...newAssignment, title: e.target.value })
                }
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                placeholder="Enter assignment description"
                value={newAssignment.description}
                onChange={(e) =>
                  setNewAssignment({
                    ...newAssignment,
                    description: e.target.value,
                  })
                }
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Enter assignment grade"
                value={newAssignment.grade}
                onChange={(e) =>
                  setNewAssignment({ ...newAssignment, grade: e.target.value })
                }
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Enter assignment deadline"
                value={newAssignment.deadline}
                onChange={(e) =>
                  setNewAssignment({
                    ...newAssignment,
                    deadline: e.target.value,
                  })
                }
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Add Assignment
              </button>
            </form>
          </div>
          <div className="mb-4">
            <h2>Existing Assignments:</h2>{" "}
            {/* Added heading for existing assignments */}
            {assignments.map((assignment) => (
              <div
                key={assignment.id}
                className="flex items-center border-b border-gray-200 py-2"
              >
                {" "}
                {/* Added spacing and borders */}
                <strong>{assignment.title}: </strong>
                <span className="ml-2">{assignment.description}</span>,
                <span className="ml-2">{assignment.grade}</span>,
                <span className="ml-2">{assignment.deadline}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentSection;
