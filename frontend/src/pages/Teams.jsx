import React from "react";
import { motion } from "framer-motion";

const Teams = () => {
  const teams = [
    {
      name: "Hyderabad Warriors",
      captain: "Virat Kohli",
      wins: 12,
      stadium: "Rajiv Gandhi Stadium",
    },
    {
      name: "Bangalore Titans",
      captain: "Rohit Sharma",
      wins: 10,
      stadium: "Chinnaswamy Stadium",
    },
    {
      name: "Mumbai Mavericks",
      captain: "MS Dhoni",
      wins: 8,
      stadium: "Wankhede Stadium",
    },
    {
      name: "Delhi Dynamos",
      captain: "KL Rahul",
      wins: 9,
      stadium: "Arun Jaitley Stadium",
    },
    {
      name: "Chennai Champions",
      captain: "Sachin Tendulkar",
      wins: 11,
      stadium: "Chepauk Stadium",
    },
    {
      name: "Kolkata Knights",
      captain: "Sourav Ganguly",
      wins: 7,
      stadium: "Eden Gardens",
    },
    {
      name: "Punjab Panthers",
      captain: "Shikhar Dhawan",
      wins: 6,
      stadium: "Punjab Cricket Association",
    },
    {
      name: "Rajasthan Royals",
      captain: "Jos Buttler",
      wins: 5,
      stadium: "Sawai Mansingh Stadium",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Teams
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Meet the elite teams of the Cricket Premier League.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teams.map((team, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-center mb-2">
              {team.name}
            </h3>
            <p className="text-gray-300 text-center">Captain: {team.captain}</p>
            <p className="text-gray-300 text-center">Wins: {team.wins}</p>
            <p className="text-gray-300 text-center text-sm">{team.stadium}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Teams;
