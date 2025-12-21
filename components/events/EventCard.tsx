"use client";

import { Calendar, MapPin, Users, Ticket, MoreVertical } from "lucide-react";
import { motion } from "framer-motion";

interface EventCardProps {
  event: {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    attendees: number;
    capacity: number;
    ticketsSold: number;
    status: string;
    image: string;
    category: string;
  };
}

export default function EventCard({ event }: EventCardProps) {
  const statusColors = {
    upcoming: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    "sold-out": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    completed: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
  };

  const attendancePercent = (event.attendees / event.capacity) * 100;

  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 cursor-pointer"
    >
      {/* Header with Image */}
      <div className="relative h-32 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <span className="text-6xl">{event.image}</span>
        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${statusColors[event.status as keyof typeof statusColors]}`}>
          {event.status.replace("-", " ").toUpperCase()}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{event.title}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">{event.category}</span>
          </div>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <MoreVertical className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>{event.date} at {event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-600 dark:text-gray-400">Attendance</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {event.attendees}/{event.capacity}
            </span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${attendancePercent}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
            />
          </div>
        </div>

        {/* Footer Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Attendees</p>
              <p className="font-semibold text-gray-900 dark:text-white">{event.attendees}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Ticket className="w-4 h-4 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Tickets Sold</p>
              <p className="font-semibold text-gray-900 dark:text-white">{event.ticketsSold}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
