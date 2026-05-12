import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Star, Crown, Medal, Target } from "lucide-react";

const Awards = () => {
  const awardCategories = [
    {
      title: "Player of the Season",
      description: "Most outstanding player of CPL 2026",
      icon: Crown,
      winner: "Virat Kohli",
      team: "Royal Challengers Bangalore",
    },
    {
      title: "Batsman of the Season",
      description: "Leading run scorer",
      icon: Target,
      winner: "Joe Root",
      team: "Punjab Kings",
    },
    {
      title: "Bowler of the Season",
      description: "Most wickets taken",
      icon: Award,
      winner: "Jasprit Bumrah",
      team: "Mumbai Indians",
    },
    {
      title: "Emerging Player",
      description: "Breakthrough performance",
      icon: Star,
      winner: "Rishabh Pant",
      team: "Delhi Capitals",
    },
    {
      title: "Fair Play Award",
      description: "Best team spirit and sportsmanship",
      icon: Medal,
      winner: "Chennai Super Kings",
      team: "Team Award",
    },
    {
      title: "Fan's Choice",
      description: "Most popular player voted by fans",
      icon: Trophy,
      winner: "MS Dhoni",
      team: "Chennai Super Kings",
    },
  ];

  const pastWinners = [
    { year: "2025", player: "Rohit Sharma", award: "Player of the Season" },
    { year: "2024", player: "Kane Williamson", award: "Batsman of the Season" },
    { year: "2023", player: "Mohammed Shami", award: "Bowler of the Season" },
    { year: "2022", player: "KL Rahul", award: "Emerging Player" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            CPL Awards
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Celebrating excellence, achievement, and outstanding performances in
            the Cricket Premier League
          </p>
        </div>

        {/* Featured Award */}
        <motion.div
          className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 border border-yellow-400/20 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Crown className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            CPL 2026 Awards Ceremony
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Join us for the spectacular awards ceremony celebrating the stars of
            CPL 2026. Witness the crowning of champions and the recognition of
            extraordinary talent.
          </p>
          <div className="text-cyan-400 font-semibold text-lg">
            April 25, 2026 • Mumbai
          </div>
        </motion.div>

        {/* Award Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Award Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awardCategories.map((award, index) => {
              const Icon = award.icon;
              return (
                <motion.div
                  key={award.title}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {award.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    {award.description}
                  </p>
                  <div className="border-t border-slate-700 pt-4">
                    <div className="text-cyan-400 font-semibold">
                      {award.winner}
                    </div>
                    <div className="text-slate-400 text-sm">{award.team}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Past Winners */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Past Winners
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left text-slate-400 py-4 px-6">Year</th>
                    <th className="text-left text-slate-400 py-4 px-6">
                      Winner
                    </th>
                    <th className="text-left text-slate-400 py-4 px-6">
                      Award
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pastWinners.map((winner, index) => (
                    <motion.tr
                      key={winner.year}
                      className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    >
                      <td className="py-4 px-6 text-white font-semibold">
                        {winner.year}
                      </td>
                      <td className="py-4 px-6 text-cyan-400">
                        {winner.player}
                      </td>
                      <td className="py-4 px-6 text-slate-300">
                        {winner.award}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Nomination Process */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            How Awards Are Decided
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Expert Panel
              </h3>
              <p className="text-slate-400">
                Seasoned cricket experts and analysts review performances
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Fan Voting
              </h3>
              <p className="text-slate-400">
                Fans vote for popular choice awards and categories
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Data Analytics
              </h3>
              <p className="text-slate-400">
                Advanced metrics and statistics inform technical awards
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Awards;
