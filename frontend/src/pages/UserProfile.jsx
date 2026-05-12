import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Trophy,
  Star,
  Edit,
  Camera,
} from "lucide-react";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "stats", label: "Statistics" },
    { id: "achievements", label: "Achievements" },
    { id: "activity", label: "Activity" },
  ];

  const userStats = {
    matchesPlayed: 45,
    totalPoints: 12580,
    rank: 1247,
    winRate: 68,
    favoriteTeam: "MI",
    joinedDate: "January 2024",
  };

  const achievements = [
    {
      title: "First Win",
      description: "Won your first fantasy match",
      icon: "🏆",
      date: "Feb 2024",
      rarity: "Common",
    },
    {
      title: "Century Maker",
      description: "Scored 100+ points in a single match",
      icon: "💯",
      date: "Mar 2024",
      rarity: "Rare",
    },
    {
      title: "Perfect Prediction",
      description: "Predicted all match outcomes correctly",
      icon: "🎯",
      date: "Apr 2024",
      rarity: "Epic",
    },
    {
      title: "Team Captain",
      description: "Led your team to victory 10 times",
      icon: "👑",
      date: "May 2024",
      rarity: "Legendary",
    },
  ];

  const recentActivity = [
    {
      type: "match",
      title: "MI vs CSK Match",
      description: "Scored 245 points",
      time: "2 hours ago",
      result: "Won",
    },
    {
      type: "achievement",
      title: "New Achievement Unlocked",
      description: "Century Maker badge earned",
      time: "1 day ago",
      result: null,
    },
    {
      type: "team",
      title: "Team Updated",
      description: "Changed captain to Rohit Sharma",
      time: "2 days ago",
      result: null,
    },
    {
      type: "prediction",
      title: "Match Prediction",
      description: "Predicted SRH to win vs RCB",
      time: "3 days ago",
      result: "Correct",
    },
  ];

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case "Common":
        return "text-slate-400";
      case "Rare":
        return "text-blue-400";
      case "Epic":
        return "text-purple-400";
      case "Legendary":
        return "text-yellow-400";
      default:
        return "text-slate-400";
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case "match":
        return "🏏";
      case "achievement":
        return "🏆";
      case "team":
        return "👥";
      case "prediction":
        return "🎯";
      default:
        return "📝";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Profile Header */}
        <motion.div
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
              <motion.button
                className="absolute bottom-0 right-0 bg-slate-700 p-3 rounded-full hover:bg-slate-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Camera className="w-5 h-5 text-white" />
              </motion.button>
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-2">John Doe</h1>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 text-slate-400 mb-4">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  john.doe@example.com
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 98765 43210
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Mumbai, India
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start text-slate-400 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                Joined {userStats.joinedDate}
              </div>
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Edit className="w-4 h-4 mr-2 inline" />
                Edit Profile
              </motion.button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">
                  {userStats.matchesPlayed}
                </div>
                <div className="text-slate-400 text-sm">Matches</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">
                  #{userStats.rank}
                </div>
                <div className="text-slate-400 text-sm">Rank</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 border border-slate-700">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                      : "text-slate-400 hover:text-white hover:bg-slate-700"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">
                {userStats.totalPoints.toLocaleString()}
              </div>
              <div className="text-slate-400 text-sm">Total Points</div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
              <Star className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">
                {userStats.winRate}%
              </div>
              <div className="text-slate-400 text-sm">Win Rate</div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
              <Trophy className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">
                {userStats.matchesPlayed}
              </div>
              <div className="text-slate-400 text-sm">Matches Played</div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
              <User className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">
                {userStats.favoriteTeam}
              </div>
              <div className="text-slate-400 text-sm">Favorite Team</div>
            </div>
          </motion.div>
        )}

        {activeTab === "stats" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Detailed Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Fantasy Performance
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Total Points</span>
                    <span className="text-white font-semibold">
                      {userStats.totalPoints.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Average Points</span>
                    <span className="text-white font-semibold">
                      {Math.round(
                        userStats.totalPoints / userStats.matchesPlayed,
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Highest Score</span>
                    <span className="text-white font-semibold">312</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Perfect Teams</span>
                    <span className="text-white font-semibold">8</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Team Performance
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Wins</span>
                    <span className="text-green-400 font-semibold">
                      {Math.round(
                        (userStats.matchesPlayed * userStats.winRate) / 100,
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Losses</span>
                    <span className="text-red-400 font-semibold">
                      {userStats.matchesPlayed -
                        Math.round(
                          (userStats.matchesPlayed * userStats.winRate) / 100,
                        )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Current Streak</span>
                    <span className="text-cyan-400 font-semibold">3 Wins</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Best Streak</span>
                    <span className="text-white font-semibold">7 Wins</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "achievements" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-2">
                      {achievement.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-xs">
                        {achievement.date}
                      </span>
                      <span
                        className={`text-xs font-semibold ${getRarityColor(achievement.rarity)}`}
                      >
                        {achievement.rarity}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === "activity" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">
                      {activity.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-2">
                      {activity.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-xs">
                        {activity.time}
                      </span>
                      {activity.result && (
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded ${
                            activity.result === "Won" ||
                            activity.result === "Correct"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-slate-500/20 text-slate-400"
                          }`}
                        >
                          {activity.result}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default UserProfile;
