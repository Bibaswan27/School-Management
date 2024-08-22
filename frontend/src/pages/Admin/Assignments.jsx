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
    <div className="container mx-auto px-4 py-2 bg-gray-100 rounded-lg shadow-md">
      <ToastContainer />
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex-1 bg-white p-4 rounded-r-lg shadow-inner">
          <div className="text-2xl font-bold mb-4">Assignments</div>
          <form onSubmit={handleAddAssignment}>
            <div className="mb-2">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Assignment Title
              </label>
              <input
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                type="text"
                id="title"
                placeholder="Enter assignment title"
                value={newAssignment.title}
                onChange={(e) =>
                  setNewAssignment({ ...newAssignment, title: e.target.value })
                }
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Assignment Description
              </label>
              <textarea
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                id="description"
                placeholder="Enter assignment description"
                value={newAssignment.description}
                onChange={(e) =>
                  setNewAssignment({
                    ...newAssignment,
                    description: e.target.value,
                  })
                }
                rows={4}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-2">
              <div>
                <label
                  htmlFor="grade"
                  className="block text-sm font-medium text-gray-700"
                >
                  Assignment Grade
                </label>
                <input
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none
                  focus:ring-indigo-500 focus:border-indigo-500"
                  type="text"
                  id="grade"
                  placeholder="Enter assignment grade"
                  value={newAssignment.grade}
                  onChange={(e) =>
                    setNewAssignment({
                      ...newAssignment,
                      grade: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="deadline"
                  className="block text-sm font-medium text-gray-700"
                >
                  Assignment Deadline
                </label>
                <input
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  type="text"
                  id="deadline"
                  placeholder="Enter assignment deadline"
                  value={newAssignment.deadline}
                  onChange={(e) =>
                    setNewAssignment({
                      ...newAssignment,
                      deadline: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <button
              className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
              type="submit"
            >
              Add Assignment
            </button>
          </form>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Assignments</h3>
            <ul className="mt-2 space-y-2">
              {assignments.map((assignment) => (
                <li
                  key={assignment.id}
                  className="p-2 rounded-md border border-gray-300"
                >
                  <div className="flex justify-between">
                    <div>
                      <strong>{assignment.title}</strong>
                      <p className="text-gray-500">{assignment.description}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">
                        Grade: {assignment.grade}
                      </span>
                      <br />
                      <span className="text-gray-500">
                        Deadline: {assignment.deadline}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
