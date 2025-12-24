"use client";

import { Users, Ticket, Calendar, TrendingUp } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const statsData = [
  { icon: Calendar, label: "Total Events", value: "24", change: "+12%", color: "from-blue-500 to-cyan-500" },
  { icon: Users, label: "Total Attendees", value: "1,234", change: "+23%", color: "from-purple-500 to-pink-500" },
  { icon: Ticket, label: "Tickets Sold", value: "892", change: "+18%", color: "from-orange-500 to-red-500" },
  { icon: TrendingUp, label: "Revenue", value: "$12.4K", change: "+31%", color: "from-green-500 to-emerald-500" },
];

const attendanceData = [
  { month: "Jan", attendees: 400 },
  { month: "Feb", attendees: 300 },
  { month: "Mar", attendees: 600 },
  { month: "Apr", attendees: 800 },
  { month: "May", attendees: 700 },
  { month: "Jun", attendees: 900 },
];

const eventTypeData = [
  { name: "Conference", value: 35 },
  { name: "Workshop", value: 25 },
  { name: "Meetup", value: 20 },
  { name: "Webinar", value: 20 },
];

const COLORS = ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b"];

export default function EventDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
            </div>
            <h3 className="text-gray-600 dark:text-gray-400 text-sm mb-1">{stat.label}</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Trend */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Attendance Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: "8px" }}
                labelStyle={{ color: "#fff" }}
              />
              <Line type="monotone" dataKey="attendees" stroke="#3b82f6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Event Types Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Event Types</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={eventTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {eventTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: "New registration", event: "Tech Conference 2024", time: "2 minutes ago", color: "blue" },
            { action: "Ticket purchased", event: "Design Workshop", time: "15 minutes ago", color: "green" },
            { action: "Event created", event: "Startup Meetup", time: "1 hour ago", color: "purple" },
            { action: "Check-in completed", event: "Web Dev Summit", time: "2 hours ago", color: "orange" },
          ].map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
              <div className={`w-2 h-2 rounded-full bg-${activity.color}-500`} />
              <div className="flex-1">
                <p className="text-gray-900 dark:text-white font-medium">{activity.action}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{activity.event}</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
