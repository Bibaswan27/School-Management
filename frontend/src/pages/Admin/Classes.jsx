import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const Classes = () => {
  const [newClassName, setNewClassName] = useState("");
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/class/getall"
      );
      if (response.data && Array.isArray(response.data.classes)) {
        setClasses(response.data.classes);
      } else {
        console.error(
          "Error fetching classes: Invalid data format",
          response.data
        );
      }
    } catch (error) {
      console.error("Error fetching classes:", error.message);
    }
  };

  const handleAddClass = async (e) => {
    e.preventDefault();
    if (newClassName.trim() !== "") {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/class",
          { grade: newClassName }
        );
        console.log("Response data:", response.data); // Log the response data
        setClasses((prevClasses) => {
          if (Array.isArray(prevClasses)) {
            return [...prevClasses, response.data]; // Use callback function to update state
          } else {
            console.error(
              "Error adding class: Invalid state for classes:",
              prevClasses
            );
            return []; // Reset classes state to an empty array
          }
        });
        setNewClassName("");
      } catch (error) {
        console.error("Error adding class:", error);
      }
    }
  };

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="col-span-9 bg-gray-100 rounded-lg p-4 shadow-md">
        <div>
          <h1 className="text-2xl font-bold mb-4">Classes</h1>{" "}
          {/* Heading styles */}
          <form onSubmit={handleAddClass} className="flex">
            <input
              type="text"
              placeholder="Enter class name"
              value={newClassName}
              onChange={(e) => setNewClassName(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 mr-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add Class
            </button>
          </form>
          <div className="mt-4">
            {Array.isArray(classes) && (
              <ul className="list-disc space-y-2">
                {" "}
                {/* List with disc markers and spacing */}
                {classes.map((classItem, index) => (
                  <li key={index}>{classItem.grade}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
