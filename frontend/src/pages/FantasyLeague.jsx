import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Users, TrendingUp, Star, Zap, Target } from "lucide-react";

const FantasyLeague = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: Target },
    { id: "leaderboard", label: "Leaderboard", icon: Trophy },
    { id: "myteam", label: "My Team", icon: Users },
  ];

  const topPlayers = [
    { rank: 1, name: "CricketKing2026", points: 2450, change: "+120" },
    { rank: 2, name: "FantasyChamp", points: 2380, change: "+95" },
    { rank: 3, name: "BumrahFan", points: 2320, change: "+78" },
  ];

  const features = [
    {
      title: "Create Your Team",
      description: "Pick 11 players within your budget",
      icon: Users,
    },
    {
      title: "Real-time Updates",
      description: "Live scoring and match updates",
      icon: Zap,
    },
    {
      title: "Weekly Contests",
      description: "Special contests with bigger prizes",
      icon: Trophy,
    },
    {
      title: "Expert Tips",
      description: "Get insights from cricket experts",
      icon: Star,
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
            Fantasy League
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Build your dream team, compete with fans worldwide, and win amazing
            prizes
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Active Users", value: "2.1M", icon: Users },
            { label: "Total Prize Pool", value: "₹50L", icon: Trophy },
            { label: "Matches Played", value: "156", icon: Target },
            { label: "Avg. Team Value", value: "₹85L", icon: TrendingUp },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 border border-slate-700">
            <div className="flex space-x-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                        : "text-slate-400 hover:text-white hover:bg-slate-700"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} className="mr-2" />
                    {tab.label}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon className="w-12 h-12 text-cyan-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Play?
              </h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Join millions of fans in creating your fantasy cricket team and
                compete for amazing prizes
              </p>
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create Your Team
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {/* Leaderboard Tab */}
        {activeTab === "leaderboard" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {topPlayers.map((player, index) => (
              <motion.div
                key={player.rank}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 ${
                  index === 0 ? "border-yellow-500/50 bg-yellow-500/5" : ""
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4 ${
                        index === 0
                          ? "bg-yellow-500 text-black"
                          : index === 1
                            ? "bg-slate-400 text-black"
                            : "bg-orange-500 text-black"
                      }`}
                    >
                      {player.rank}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {player.name}
                      </h3>
                      <p className="text-slate-400">{player.points} points</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">
                      {player.points}
                    </div>
                    <div className="text-green-400 text-sm">
                      {player.change}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* My Team Tab */}
        {activeTab === "myteam" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-12 border border-slate-700">
              <Users className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">
                No Team Yet
              </h2>
              <p className="text-slate-400 mb-6">
                Create your fantasy cricket team to start competing
              </p>
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create Team
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default FantasyLeague;
