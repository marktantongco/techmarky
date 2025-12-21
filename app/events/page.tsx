"use client";

import { useState } from "react";
import EventDashboard from "@/components/events/EventDashboard";
import EventList from "@/components/events/EventList";
import CreateEventModal from "@/components/events/CreateEventModal";
import { Calendar, Plus, BarChart3, Users, Ticket } from "lucide-react";

export default function EventsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"dashboard" | "events">("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="glass-strong border-b border-white/10 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AttendFlow</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Event Management Platform</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              <Plus className="w-5 h-5" />
              Create Event
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "dashboard"
                ? "bg-white dark:bg-gray-800 shadow-lg text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50"
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "events"
                ? "bg-white dark:bg-gray-800 shadow-lg text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50"
            }`}
          >
            <Ticket className="w-5 h-5" />
            My Events
          </button>
        </div>

        {/* Content */}
        {activeTab === "dashboard" ? <EventDashboard /> : <EventList />}
      </div>

      {/* Create Event Modal */}
      <CreateEventModal 
        isOpen={isCreateModalOpen} 
        onClose={() => setIsCreateModalOpen(false)} 
      />
    </div>
  );
}
