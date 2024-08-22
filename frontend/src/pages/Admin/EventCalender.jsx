import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");
  const [isDashboard, setIsDashboard] = useState(false); // Track dashboard status

  // Function to fetch events from the backend
  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/events/getall"
      );
      setEvents(response.data.events || []); // Handle empty events array gracefully
    } catch (error) {
      console.error("Error fetching events:", error);
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
        events: newEvent,
      });
      console.log("Event added:", response.data); // Log success message
      setNewEvent(""); // Clear input field after successful addition
      fetchEvents(); // Update events list after adding a new event
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  // Check for specific condition (replace with your actual logic)
  useEffect(() => {
    const isOnDashboard = window.location.pathname === "/admin/dashboard"; // Example check
    setIsDashboard(isOnDashboard);
  }, []);

  // Function to remove an event
  const removeEvent = async (eventId) => {
    try {
      console.log(eventId, "Gerwaguui");
      const response = await axios.delete(
        `http://localhost:4000/api/v1/events/deleteEvent`,
        {
          params: { eventId: eventId },
        }
      );
      console.log("Event removed:", response.data); // Log success message
      fetchEvents(); // Update events list after removing an event
    } catch (error) {
      console.error("Error removing event:", error);
    }
  };

  return (
    <div className="flex flex-row p-4 bg-gray-100 rounded overflow-hidden shadow">
      {!isDashboard && <Sidebar />}
      <div className="flex-1">
        {" "}
        <h1 className="text-2xl font-bold mb-4">Events & Calendar</h1>
        <div className="mb-4">Current Time: {new Date().toLocaleString()}</div>
        <div>
          Calendar
        </div>
        <div className="flex flex-row justify-between items-center h-full w-full ">
          <div className="bg-white p-4 rounded shadow mb-4">
            <h2 className="text-xl font-bold mb-2">Add New Event</h2>
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                value={newEvent}
                onChange={(e) => setNewEvent(e.target.value)}
                placeholder="Enter Event Title"
                className="px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-500"
              />
              <button
                type="submit"
                onClick={addEvent}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded font-bold focus:outline-none focus:ring focus:ring-blue-500"
              >
                Add Event
              </button>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Events</h2>
            <div className="overflow-auto h-56">
              {events.map((event, index) => (
                <div 
                  key={index}
                  className="mb-2 border-b border-gray-200 p-2 flex items-center justify-between space-x-4"
                >
                  <span>{event.events}</span>{" "}
                 
                  <button
                    type="button"
                    onClick={() => removeEvent(event._id)} 
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
