import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, MapPin, Calendar, Users } from "lucide-react";

const Tickets = () => {
  const [selectedStadium, setSelectedStadium] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const stadiums = [
    { name: "Rajiv Gandhi Stadium", location: "Hyderabad" },
    { name: "Chinnaswamy Stadium", location: "Bangalore" },
    { name: "Wankhede Stadium", location: "Mumbai" },
    { name: "Chepauk Stadium", location: "Chennai" },
  ];

  const categories = [
    { name: "VIP Box", price: 5000, seats: "Premium seating" },
    { name: "Premium", price: 2500, seats: "Covered seating" },
    { name: "General", price: 800, seats: "Open seating" },
  ];

  const handleBooking = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Book Tickets
          </h1>
          <p className="text-xl text-gray-300">
            Experience the thrill of CPL live
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Select Stadium
              </label>
              <div className="grid grid-cols-2 gap-4">
                {stadiums.map((stadium, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedStadium(stadium.name)}
                    className={`p-4 rounded-xl border transition-all ${
                      selectedStadium === stadium.name
                        ? "border-cyan-400 bg-cyan-400/10"
                        : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
                    }`}
                  >
                    <MapPin className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">
                      {stadium.name}
                    </div>
                    <div className="text-slate-400 text-xs">
                      {stadium.location}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Select Category
              </label>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full p-4 rounded-xl border transition-all ${
                      selectedCategory === category.name
                        ? "border-cyan-400 bg-cyan-400/10"
                        : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-white font-semibold">
                          {category.name}
                        </div>
                        <div className="text-slate-400 text-sm">
                          {category.seats}
                        </div>
                      </div>
                      <div className="text-cyan-400 font-bold">
                        ₹{category.price}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-6">
              Booking Summary
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-400">Stadium:</span>
                <span className="text-white">
                  {selectedStadium || "Not selected"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Category:</span>
                <span className="text-white">
                  {selectedCategory || "Not selected"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Quantity:</span>
                <span className="text-white">1</span>
              </div>
              <div className="border-t border-slate-700 pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-white">Total:</span>
                  <span className="text-cyan-400">
                    ₹
                    {categories.find((c) => c.name === selectedCategory)
                      ?.price || 0}
                  </span>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBooking}
              disabled={!selectedStadium || !selectedCategory}
              className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Book Tickets
            </motion.button>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              className="mx-auto mt-8 max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-slate-700 bg-slate-800 p-8 text-center"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Tickets Booked Successfully!
              </h3>
              <p className="text-slate-300 mb-4">
                See you at the stadium! Your tickets have been sent to your
                email.
              </p>
              <p className="text-cyan-400 font-semibold">
                Booking ID: CPL-TKT-2026-001
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Tickets;
