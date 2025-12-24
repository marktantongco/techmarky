"use client";

import { useState } from "react";
import { Mail, User, Phone, Ticket, CheckCircle } from "lucide-react";
import QRCodeSVG from "react-qr-code";
import { motion } from "framer-motion";

interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  ticketType: string;
}

export default function AttendeeRegistration({ eventId }: { eventId: string }) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [qrData, setQrData] = useState("");
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: "",
    email: "",
    phone: "",
    ticketType: "general",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate QR code data
    const ticketData = {
      eventId,
      attendeeId: Math.random().toString(36).substr(2, 9),
      name: formData.name,
      email: formData.email,
      ticketType: formData.ticketType,
      timestamp: new Date().toISOString(),
    };
    
    setQrData(JSON.stringify(ticketData));
    setStep("success");
  };

  if (step === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Registration Successful!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Your ticket has been confirmed. Save this QR code for check-in.
        </p>

        <div className="bg-white p-6 rounded-xl shadow-inner inline-block mb-6">
          <QRCodeSVG value={qrData} size={200} />
        </div>

        <div className="space-y-4 mb-6">
          <div className="glass-strong rounded-lg p-4 text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Attendee Name</p>
            <p className="font-semibold text-gray-900 dark:text-white">{formData.name}</p>
          </div>
          <div className="glass-strong rounded-lg p-4 text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email</p>
            <p className="font-semibold text-gray-900 dark:text-white">{formData.email}</p>
          </div>
          <div className="glass-strong rounded-lg p-4 text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Ticket Type</p>
            <p className="font-semibold text-gray-900 dark:text-white capitalize">{formData.ticketType}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
            Download Ticket
          </button>
          <button className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Email Ticket
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <Ticket className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Register for Event</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">Fill in your details to get your ticket</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <User className="w-4 h-4 inline mr-1" />
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Mail className="w-4 h-4 inline mr-1" />
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Phone className="w-4 h-4 inline mr-1" />
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Ticket Type *
          </label>
          <div className="grid grid-cols-3 gap-4">
            {["general", "vip", "student"].map((type) => (
              <label
                key={type}
                className={`relative flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.ticketType === type
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-gray-300 dark:border-gray-600 hover:border-gray-400"
                }`}
              >
                <input
                  type="radio"
                  name="ticketType"
                  value={type}
                  checked={formData.ticketType === type}
                  onChange={(e) => setFormData({ ...formData, ticketType: e.target.value })}
                  className="sr-only"
                />
                <span className="font-semibold text-gray-900 dark:text-white capitalize">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all"
        >
          Complete Registration
        </button>
      </form>
    </div>
  );
}
