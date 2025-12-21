"use client";

import { useState } from "react";
import EventCard from "./EventCard";
import { Search, Filter } from "lucide-react";

const mockEvents = [
  {
    id: "1",
    title: "Tech Conference 2024",
    date: "2024-03-15",
    time: "09:00 AM",
    location: "San Francisco, CA",
    attendees: 250,
    capacity: 300,
    ticketsSold: 245,
    status: "upcoming",
    image: "🎯",
    category: "Conference"
  },
  {
    id: "2",
    title: "Design Workshop",
    date: "2024-03-20",
    time: "02:00 PM",
    location: "New York, NY",
    attendees: 50,
    capacity: 60,
    ticketsSold: 48,
    status: "upcoming",
    image: "🎨",
    category: "Workshop"
  },
  {
    id: "3",
    title: "Startup Meetup",
    date: "2024-03-10",
    time: "06:00 PM",
    location: "Austin, TX",
    attendees: 100,
    capacity: 100,
    ticketsSold: 100,
    status: "sold-out",
    image: "🚀",
    category: "Meetup"
  },
  {
    id: "4",
    title: "Web Dev Summit",
    date: "2024-02-28",
    time: "10:00 AM",
    location: "Seattle, WA",
    attendees: 180,
    capacity: 200,
    ticketsSold: 180,
    status: "completed",
    image: "💻",
    category: "Conference"
  },
];

export default function EventList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredEvents = mockEvents.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || event.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Events</option>
          <option value="upcoming">Upcoming</option>
          <option value="sold-out">Sold Out</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Event Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">No events found</p>
        </div>
      )}
    </div>
  );
}
