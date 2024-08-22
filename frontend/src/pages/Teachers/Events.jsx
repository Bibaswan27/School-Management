import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const EventSection = ({ isOpenDashboard }) => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");
  const [error, setError] = useState(null); // Initialize error state

  // Function to fetch events from the backend
  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/events/getall");
      setEvents(response.data.events || []);
    } catch (error) {
      console.error("Error fetching events:", error);
      setError("Error fetching events"); // Set error state on error
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Function to add a new event
  const addEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/events", {
        event: newEvent,
      });
      setEvents([...events, response.data]);
      setNewEvent("");
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <div className="flex flex-row container mx-auto px-4 py-4">
      {/* Conditionally render Sidebar */}
      {!isOpenDashboard && <Sidebar />}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Event Section */}
        <div className="col-span-full md:col-span-8 bg-gray-100 rounded-lg shadow-md px-6 py-8">
          <div className="mb-4">
            <h1 className="text-xl font-bold text-gray-800">Events & Calendar</h1>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>Current Time: {new Date().toLocaleString()}</div>
            <div className="text-gray-500">Calendar</div>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-bold text-gray-800">Add New Event</h2>
            <form onSubmit={addEvent} className="flex flex-col space-y-2">
              <input
                type="text"
                value={newEvent}
                onChange={(e) => setNewEvent(e.target.value)}
                placeholder="Enter Event"
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Add Event
              </button>
            </form>
          </div>

          {/* Display error message if any */}
          {error && <div className="text-red-500 font-bold">{error}</div>}

          <div className="mt-4">
            <h2 className="text-lg font-bold text-gray-800">Events</h2>
            <ul className="space-y-2">
              {events.map((event, index) => (
                <li key={index} className="text-gray-700 hover:text-gray-800">
                  {event.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;