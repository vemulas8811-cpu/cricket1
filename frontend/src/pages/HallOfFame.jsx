import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Star, Crown } from "lucide-react";

const HallOfFame = () => {
  const legends = [
    {
      name: "Virat Kohli",
      achievement: "Most Runs in CPL History",
      year: "2010-2026",
      stats: "8,542 runs",
      image: "VK",
    },
    {
      name: "Jasprit Bumrah",
      achievement: "Most Wickets in CPL History",
      year: "2013-2026",
      stats: "187 wickets",
      image: "JB",
    },
    {
      name: "MS Dhoni",
      achievement: "Most CPL Titles",
      year: "2008-2020",
      stats: "4 titles",
      image: "MSD",
    },
  ];

  const records = [
    {
      title: "Highest Individual Score",
      holder: "Chris Gayle",
      score: "175*",
      year: "2013",
    },
    {
      title: "Best Bowling Figures",
      holder: "Alzarri Joseph",
      score: "6/12",
      year: "2019",
    },
    {
      title: "Most Sixes",
      holder: "Chris Gayle",
      score: "357",
      year: "2009-2019",
    },
    {
      title: "Fastest Century",
      holder: "AB de Villiers",
      score: "31 balls",
      year: "2015",
    },
  ];

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
            Hall of Fame
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Celebrating the legends and records that have shaped CPL history
          </p>
        </div>

        {/* Legends Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            CPL Legends
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {legends.map((legend, index) => (
              <motion.div
                key={legend.name}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {legend.image}
                </div>
                <Crown className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {legend.name}
                </h3>
                <p className="text-cyan-400 font-semibold mb-2">
                  {legend.achievement}
                </p>
                <p className="text-slate-400 text-sm mb-2">{legend.year}</p>
                <p className="text-white font-bold text-lg">{legend.stats}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Records Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Record Holders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {records.map((record, index) => (
              <motion.div
                key={record.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
                  <h3 className="text-xl font-semibold text-white">
                    {record.title}
                  </h3>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-cyan-400 font-semibold text-lg">
                      {record.holder}
                    </p>
                    <p className="text-slate-400 text-sm">{record.year}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold text-2xl">
                      {record.score}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Award className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            CPL Achievements
          </h2>
          <p className="text-slate-300 mb-6 max-w-3xl mx-auto">
            The Cricket Premier League has revolutionized cricket entertainment,
            bringing together the world's best players, creating unforgettable
            moments, and building a global fanbase of millions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "15", label: "Seasons" },
              { number: "10", label: "Teams" },
              { number: "100M+", label: "Global Fans" },
              { number: "₹1000Cr+", label: "Prize Money" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HallOfFame;
