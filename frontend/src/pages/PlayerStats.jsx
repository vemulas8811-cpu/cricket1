import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Target, TrendingUp, Award, Star, Users } from "lucide-react";

const PlayerStats = () => {
  const [selectedCategory, setSelectedCategory] = useState("batting");

  const categories = [
    { id: "batting", label: "Batting", icon: Target },
    { id: "bowling", label: "Bowling", icon: TrendingUp },
    { id: "fielding", label: "Fielding", icon: Award },
    { id: "allround", label: "All-round", icon: Star },
  ];

  const battingStats = [
    {
      rank: 1,
      player: "Virat Kohli",
      team: "RCB",
      runs: 2456,
      average: 58.2,
      strikeRate: 142.3,
      centuries: 8,
      fifties: 15,
    },
    {
      rank: 2,
      player: "Rohit Sharma",
      team: "MI",
      runs: 2234,
      average: 52.1,
      strikeRate: 138.7,
      centuries: 6,
      fifties: 18,
    },
    {
      rank: 3,
      player: "David Warner",
      team: "SRH",
      runs: 2108,
      average: 49.8,
      strikeRate: 145.2,
      centuries: 5,
      fifties: 16,
    },
    {
      rank: 4,
      player: "Shikhar Dhawan",
      team: "PBKS",
      runs: 1987,
      average: 45.6,
      strikeRate: 135.9,
      centuries: 4,
      fifties: 14,
    },
    {
      rank: 5,
      player: "KL Rahul",
      team: "PBKS",
      runs: 1896,
      average: 48.3,
      strikeRate: 141.8,
      centuries: 3,
      fifties: 12,
    },
  ];

  const bowlingStats = [
    {
      rank: 1,
      player: "Jasprit Bumrah",
      team: "MI",
      wickets: 87,
      average: 18.5,
      economy: 6.8,
      strikeRate: 16.2,
      best: "5/10",
    },
    {
      rank: 2,
      player: "Rashid Khan",
      team: "SRH",
      wickets: 82,
      average: 19.2,
      economy: 7.1,
      strikeRate: 16.8,
      best: "4/24",
    },
    {
      rank: 3,
      player: "Yuzvendra Chahal",
      team: "RR",
      wickets: 76,
      average: 20.8,
      economy: 7.4,
      strikeRate: 17.1,
      best: "4/17",
    },
    {
      rank: 4,
      player: "Mohammed Shami",
      team: "PBKS",
      wickets: 71,
      average: 22.1,
      economy: 7.8,
      strikeRate: 17.9,
      best: "4/15",
    },
    {
      rank: 5,
      player: "Bhuvneshwar Kumar",
      team: "SRH",
      wickets: 68,
      average: 23.4,
      economy: 7.6,
      strikeRate: 18.5,
      best: "3/22",
    },
  ];

  const fieldingStats = [
    {
      rank: 1,
      player: "Rishabh Pant",
      team: "DC",
      catches: 45,
      runouts: 8,
      stumpings: 12,
      total: 65,
    },
    {
      rank: 2,
      player: "MS Dhoni",
      team: "CSK",
      catches: 38,
      runouts: 6,
      stumpings: 15,
      total: 59,
    },
    {
      rank: 3,
      player: "Jos Buttler",
      team: "RR",
      catches: 42,
      runouts: 5,
      stumpings: 8,
      total: 55,
    },
    {
      rank: 4,
      player: "Dinesh Karthik",
      team: "KKR",
      catches: 35,
      runouts: 7,
      stumpings: 10,
      total: 52,
    },
    {
      rank: 5,
      player: "Sanju Samson",
      team: "RR",
      catches: 40,
      runouts: 4,
      stumpings: 6,
      total: 50,
    },
  ];

  const allroundStats = [
    {
      rank: 1,
      player: "Andre Russell",
      team: "KKR",
      batting: 1456,
      bowling: 56,
      total: 2012,
    },
    {
      rank: 2,
      player: "Hardik Pandya",
      team: "MI",
      batting: 1234,
      bowling: 48,
      total: 1682,
    },
    {
      rank: 3,
      player: "Ravindra Jadeja",
      team: "CSK",
      batting: 987,
      bowling: 42,
      total: 1429,
    },
    {
      rank: 4,
      player: "Kieron Pollard",
      team: "MI",
      batting: 1123,
      bowling: 38,
      total: 1561,
    },
    {
      rank: 5,
      player: "Marcus Stoinis",
      team: "PBKS",
      batting: 998,
      bowling: 35,
      total: 1333,
    },
  ];

  const getCurrentStats = () => {
    switch (selectedCategory) {
      case "batting":
        return battingStats;
      case "bowling":
        return bowlingStats;
      case "fielding":
        return fieldingStats;
      case "allround":
        return allroundStats;
      default:
        return battingStats;
    }
  };

  const getTableHeaders = () => {
    switch (selectedCategory) {
      case "batting":
        return ["Rank", "Player", "Team", "Runs", "Avg", "SR", "100s", "50s"];
      case "bowling":
        return ["Rank", "Player", "Team", "Wkts", "Avg", "Econ", "SR", "Best"];
      case "fielding":
        return [
          "Rank",
          "Player",
          "Team",
          "Catches",
          "Runouts",
          "Stumpings",
          "Total",
        ];
      case "allround":
        return ["Rank", "Player", "Team", "Batting", "Bowling", "Total"];
      default:
        return [];
    }
  };

  const renderStatValue = (stat, value) => {
    if (selectedCategory === "batting") {
      if (stat === "runs" || stat === "centuries" || stat === "fifties") {
        return <span className="text-cyan-400 font-semibold">{value}</span>;
      }
    } else if (selectedCategory === "bowling") {
      if (stat === "wickets") {
        return <span className="text-green-400 font-semibold">{value}</span>;
      }
    } else if (selectedCategory === "fielding") {
      if (stat === "total") {
        return <span className="text-purple-400 font-semibold">{value}</span>;
      }
    } else if (selectedCategory === "allround") {
      if (stat === "total") {
        return <span className="text-yellow-400 font-semibold">{value}</span>;
      }
    }
    return value;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Player Statistics
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive statistics for CPL 2026 players across all categories
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 border border-slate-700">
            <div className="flex space-x-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                        : "text-slate-400 hover:text-white hover:bg-slate-700"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    {category.label}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Table */}
        <motion.div
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-700/50">
                <tr>
                  {getTableHeaders().map((header) => (
                    <th
                      key={header}
                      className="px-6 py-4 text-left text-sm font-semibold text-slate-300 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {getCurrentStats().map((player, index) => (
                  <motion.tr
                    key={player.player}
                    className="hover:bg-slate-700/30 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            player.rank === 1
                              ? "bg-yellow-500/20 text-yellow-400"
                              : player.rank === 2
                                ? "bg-slate-400/20 text-slate-300"
                                : player.rank === 3
                                  ? "bg-orange-500/20 text-orange-400"
                                  : "bg-slate-600/20 text-slate-400"
                          }`}
                        >
                          {player.rank}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-white">
                            {player.player}
                          </div>
                          <div className="text-sm text-slate-400">
                            {player.team}
                          </div>
                        </div>
                      </div>
                    </td>
                    {Object.entries(player)
                      .slice(3)
                      .map(([key, value]) => (
                        <td
                          key={key}
                          className="px-6 py-4 whitespace-nowrap text-sm text-slate-300"
                        >
                          {renderStatValue(key, value)}
                        </td>
                      ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Top Performers Cards */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-400/20">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-cyan-400 mr-3" />
              <h3 className="text-xl font-bold text-white">
                Leading Run Scorer
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400 mb-2">
              Virat Kohli
            </div>
            <div className="text-slate-300">2,456 Runs</div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-400/20">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-xl font-bold text-white">
                Leading Wicket Taker
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400 mb-2">
              Jasprit Bumrah
            </div>
            <div className="text-slate-300">87 Wickets</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-400/20">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Best All-rounder</h3>
            </div>
            <div className="text-3xl font-bold text-purple-400 mb-2">
              Andre Russell
            </div>
            <div className="text-slate-300">2,012 Points</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Track Your Favorite Players
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Follow your favorite players and get detailed statistics,
            performance analysis, and match predictions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Create Player Watchlist
            </motion.button>
            <motion.button
              className="bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Detailed Stats
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PlayerStats;
