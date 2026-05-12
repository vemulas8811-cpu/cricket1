import React from "react";
import { motion } from "framer-motion";

const LeagueInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          League Information
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Discover everything about the Cricket Premier League - from tournament
          format to team details.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder cards */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            About CPL
          </h3>
          <p className="text-gray-300">
            The premier cricket league featuring elite teams and players.
          </p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            Tournament Format
          </h3>
          <p className="text-gray-300">
            Round-robin followed by playoffs and finals.
          </p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Teams</h3>
          <p className="text-gray-300">8 elite teams competing for glory.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default LeagueInfo;
