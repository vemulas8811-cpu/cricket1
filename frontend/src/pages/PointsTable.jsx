import React from "react";
import { motion } from "framer-motion";
import { Trophy, TrendingUp, Target } from "lucide-react";

const PointsTable = () => {
  const teams = [
    {
      name: "Hyderabad Warriors",
      matches: 14,
      wins: 10,
      losses: 4,
      nrr: "+0.456",
      points: 20,
    },
    {
      name: "Chennai Champions",
      matches: 14,
      wins: 9,
      losses: 5,
      nrr: "+0.389",
      points: 18,
    },
    {
      name: "Mumbai Mavericks",
      matches: 14,
      wins: 8,
      losses: 6,
      nrr: "+0.234",
      points: 16,
    },
    {
      name: "Bangalore Titans",
      matches: 14,
      wins: 8,
      losses: 6,
      nrr: "+0.198",
      points: 16,
    },
    {
      name: "Delhi Dynamos",
      matches: 14,
      wins: 7,
      losses: 7,
      nrr: "+0.123",
      points: 14,
    },
    {
      name: "Kolkata Knights",
      matches: 14,
      wins: 6,
      losses: 8,
      nrr: "-0.145",
      points: 12,
    },
    {
      name: "Punjab Panthers",
      matches: 14,
      wins: 5,
      losses: 9,
      nrr: "-0.267",
      points: 10,
    },
    {
      name: "Rajasthan Royals",
      matches: 14,
      wins: 4,
      losses: 10,
      nrr: "-0.456",
      points: 8,
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
          Points Table
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Current standings of CPL 2026 season
        </p>
      </div>

      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-700/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                  Team
                </th>
                <th className="px-6 py-4 text-center text-xs font-medium text-slate-300 uppercase tracking-wider">
                  M
                </th>
                <th className="px-6 py-4 text-center text-xs font-medium text-slate-300 uppercase tracking-wider">
                  W
                </th>
                <th className="px-6 py-4 text-center text-xs font-medium text-slate-300 uppercase tracking-wider">
                  L
                </th>
                <th className="px-6 py-4 text-center text-xs font-medium text-slate-300 uppercase tracking-wider">
                  NRR
                </th>
                <th className="px-6 py-4 text-center text-xs font-medium text-slate-300 uppercase tracking-wider">
                  Pts
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {teams.map((team, index) => (
                <motion.tr
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`${
                    index < 4
                      ? "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-l-4 border-cyan-400"
                      : ""
                  } hover:bg-slate-700/30 transition-colors duration-200`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                      <div className="text-sm font-medium text-white">
                        {team.name}
                      </div>
                      {index < 4 && (
                        <Trophy className="w-4 h-4 text-yellow-400 ml-2" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-300">
                    {team.matches}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-green-400">
                    {team.wins}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-red-400">
                    {team.losses}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-300">
                    {team.nrr}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-bold text-cyan-400">
                    {team.points}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
          <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">
            Qualification
          </h3>
          <p className="text-slate-400">Top 4 teams advance to playoffs</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
          <TrendingUp className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Playoffs</h3>
          <p className="text-slate-400">Semi-finals and final matches</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
          <Target className="w-8 h-8 text-blue-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">
            Championship
          </h3>
          <p className="text-slate-400">$2M prize for winners</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PointsTable;
