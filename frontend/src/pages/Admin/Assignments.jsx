import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Assignments = () => {
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
        // Display success toast message
        toast.success("Assignment added successfully");
        // Add the new assignment to the list
        setAssignments([...assignments, response.data.assignment]);
        // Clear the form
        setNewAssignment({
          title: "",
          description: "",
          grade: "",
          deadline: "",
        });
      } catch (error) {
        console.error("Error adding assignment:", error);
        // Display error toast message
        toast.error("Error adding assignment");
      }
    }
  };

  return (
    <div className="flex pl-20">
      <ToastContainer />
      <Sidebar />
      <div className="flex-1">
        <div className="p-2">
          <div className="text-2xl">Assignments</div>
          <div className="mb-2" onSubmit={handleAddAssignment}>
            <div
              className="p-1 mb-2 w-full"
              type="text"
              placeholder="Enter assignment title"
              value={newAssignment.title}
              onChange={(e) =>
                setNewAssignment({ ...newAssignment, title: e.target.value })
              }
            />
            <div
              className="p-1 mb-1"
              placeholder="Enter assignment description"
              value={newAssignment.description}
              onChange={(e) =>
                setNewAssignment({
                  ...newAssignment,
                  description: e.target.value,
                })
              }
            />
            <div
              className="p-1 mb-1"
              type="text"
              placeholder="Enter assignment grade"
              value={newAssignment.grade}
              onChange={(e) =>
                setNewAssignment({ ...newAssignment, grade: e.target.value })
              }
            />
            <div
              className="p-1 mb-1"
              type="text"
              placeholder="Enter assignment deadline"
              value={newAssignment.deadline}
              onChange={(e) =>
                setNewAssignment({ ...newAssignment, deadline: e.target.value })
              }
            />
            <button className="px-1.5 py-1" type="submit">
              Add Assignment
            </button>
          </div>

          <div>
            {assignments.map((assignment) => (
              <div className="p-1 mb-1" key={assignment.id}>
                <strong>{assignment.title}: </strong>
                {assignment.description}, {assignment.grade},{" "}
                {assignment.deadline}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
