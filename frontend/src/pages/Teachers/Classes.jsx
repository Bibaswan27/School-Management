import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const ClassSection = () => {
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

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="col-span-9 bg-gray-100 rounded-lg p-4 shadow-md">
        <h1 className="text-2xl font-bold mb-4">Classes</h1>{" "}
        <div className="space-y-4">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-2 rounded-md bg-white shadow-md hover:bg-gray-200"
            >
              <h3 className="mr-2 text-lg font-medium">
                {classItem.grade}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassSection;
