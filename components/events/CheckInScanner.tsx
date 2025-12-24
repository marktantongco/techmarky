"use client";

import { useState } from "react";
import { Scan, CheckCircle, XCircle, User, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CheckInResult {
  success: boolean;
  attendee: {
    name: string;
    email: string;
    ticketType: string;
  } | null;
  message: string;
}

export default function CheckInScanner() {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<CheckInResult | null>(null);
  const [recentCheckIns, setRecentCheckIns] = useState([
    { name: "Alice Johnson", time: "2 min ago", ticketType: "VIP" },
    { name: "Bob Smith", time: "5 min ago", ticketType: "General" },
    { name: "Carol Davis", time: "8 min ago", ticketType: "Student" },
  ]);

  const handleScan = () => {
    setScanning(true);
    
    // Simulate QR code scan
    setTimeout(() => {
      const mockResult: CheckInResult = {
        success: Math.random() > 0.3,
        attendee: {
          name: "John Doe",
          email: "john@example.com",
          ticketType: "General",
        },
        message: Math.random() > 0.3 ? "Check-in successful!" : "Invalid ticket or already checked in",
      };
      
      setResult(mockResult);
      setScanning(false);
      
      if (mockResult.success && mockResult.attendee) {
        setRecentCheckIns([
          { name: mockResult.attendee.name, time: "Just now", ticketType: mockResult.attendee.ticketType },
          ...recentCheckIns.slice(0, 4),
        ]);
      }
      
      setTimeout(() => setResult(null), 3000);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Scanner Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
            <Scan className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Check-In Scanner</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Scan attendee QR codes</p>
          </div>
        </div>

        {/* Scanner Area */}
        <div className="relative aspect-square max-w-md mx-auto mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl" />
          <div className="relative h-full flex items-center justify-center">
            {scanning ? (
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32"
              >
                <Scan className="w-full h-full text-blue-500" />
              </motion.div>
            ) : (
              <Scan className="w-32 h-32 text-gray-400" />
            )}
          </div>
          
          {/* Scan Animation Lines */}
          {scanning && (
            <motion.div
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            />
          )}
        </div>

        {/* Result Display */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`p-6 rounded-xl mb-6 ${
                result.success
                  ? "bg-green-50 dark:bg-green-900/20 border-2 border-green-500"
                  : "bg-red-50 dark:bg-red-900/20 border-2 border-red-500"
              }`}
            >
              <div className="flex items-start gap-4">
                {result.success ? (
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 flex-shrink-0" />
                ) : (
                  <XCircle className="w-8 h-8 text-red-600 dark:text-red-400 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <p className={`font-bold text-lg mb-1 ${result.success ? "text-green-900 dark:text-green-100" : "text-red-900 dark:text-red-100"}`}>
                    {result.message}
                  </p>
                  {result.success && result.attendee && (
                    <div className="space-y-1 text-sm">
                      <p className="text-green-800 dark:text-green-200">
                        <User className="w-4 h-4 inline mr-1" />
                        {result.attendee.name}
                      </p>
                      <p className="text-green-800 dark:text-green-200">
                        Ticket: {result.attendee.ticketType}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={handleScan}
          disabled={scanning}
          className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {scanning ? "Scanning..." : "Start Scan"}
        </button>
      </div>

      {/* Recent Check-ins */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Check-ins</h3>
        <div className="space-y-3">
          {recentCheckIns.map((checkin, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                {checkin.name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 dark:text-white">{checkin.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{checkin.ticketType} Ticket</p>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                {checkin.time}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
