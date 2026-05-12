import React from "react";
import { motion } from "framer-motion";

const MatchCenter = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Match Center
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Detailed match analysis and live updates.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            Scoreboard
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Hyderabad Warriors</span>
              <span>187/4 (20 overs)</span>
            </div>
            <div className="flex justify-between">
              <span>Bangalore Titans</span>
              <span>142/6 (16.2 overs)</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            Commentary
          </h3>
          <div className="space-y-2 text-gray-300">
            <p>16.2: Kohli hits a boundary! 6 runs.</p>
            <p>16.1: Good delivery, defended well.</p>
            <p>15.6: Four! Excellent shot.</p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
        <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
          Match Timeline
        </h3>
        <div className="h-64 bg-slate-700 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Timeline Chart Placeholder</span>
        </div>
      </div>
    </motion.div>
  );
};

export default MatchCenter;
