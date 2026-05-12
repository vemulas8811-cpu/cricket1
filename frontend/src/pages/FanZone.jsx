import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Share2,
  TrendingUp,
  Users,
  Trophy,
  Star,
  Zap,
} from "lucide-react";

const FanZone = () => {
  const [activeTab, setActiveTab] = useState("feed");

  const posts = [
    {
      id: 1,
      user: "CricketFan2026",
      avatar: "CF",
      content: "What a match last night! Bumrah was absolutely phenomenal 🔥",
      likes: 1247,
      comments: 89,
      shares: 23,
      time: "2h ago",
      image: true,
    },
    {
      id: 2,
      user: "ViratFanClub",
      avatar: "VF",
      content: "Century number 75 for the King! 🏏👑 #ViratKohli #CPL2026",
      likes: 2156,
      comments: 156,
      shares: 67,
      time: "4h ago",
      image: false,
    },
    {
      id: 3,
      user: "CricketQueen",
      avatar: "CQ",
      content:
        "The atmosphere at the stadium was electric! Best fan experience ever 🎉",
      likes: 892,
      comments: 45,
      shares: 12,
      time: "6h ago",
      image: true,
    },
  ];

  const trendingTopics = [
    { topic: "#CPL2026", posts: "45.2K" },
    { topic: "#FinalMatch", posts: "32.1K" },
    { topic: "#ViratKohli", posts: "28.7K" },
    { topic: "#Bumrah", posts: "19.3K" },
    { topic: "#CricketFever", posts: "15.8K" },
  ];

  const fanStats = [
    { label: "Active Fans", value: "2.1M", icon: Users },
    { label: "Posts Today", value: "45.2K", icon: MessageCircle },
    { label: "Engagements", value: "892K", icon: Heart },
    { label: "Trending Topics", value: "156", icon: TrendingUp },
  ];

  const tabs = [
    { id: "feed", label: "Fan Feed", icon: MessageCircle },
    { id: "trending", label: "Trending", icon: TrendingUp },
    { id: "communities", label: "Communities", icon: Users },
    { id: "achievements", label: "Achievements", icon: Trophy },
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
            Fan Zone
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with fellow cricket enthusiasts, share your passion, and be
            part of the CPL community
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {fanStats.map((stat, index) => {
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Fan Feed */}
            {activeTab === "feed" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                        {post.avatar}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">
                          {post.user}
                        </h3>
                        <p className="text-slate-400 text-sm">{post.time}</p>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-4">{post.content}</p>

                    {post.image && (
                      <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg h-48 mb-4 flex items-center justify-center">
                        <span className="text-slate-400">Match Photo</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                      <motion.button
                        className="flex items-center text-slate-400 hover:text-red-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Heart className="w-5 h-5 mr-2" />
                        {post.likes}
                      </motion.button>
                      <motion.button
                        className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {post.comments}
                      </motion.button>
                      <motion.button
                        className="flex items-center text-slate-400 hover:text-green-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Share2 className="w-5 h-5 mr-2" />
                        {post.shares}
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Trending */}
            {activeTab === "trending" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Trending Topics
                  </h2>
                  <div className="space-y-4">
                    {trendingTopics.map((topic, index) => (
                      <motion.div
                        key={topic.topic}
                        className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div>
                          <h3 className="text-cyan-400 font-semibold">
                            {topic.topic}
                          </h3>
                          <p className="text-slate-400 text-sm">
                            {topic.posts} posts
                          </p>
                        </div>
                        <TrendingUp className="w-5 h-5 text-green-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Communities */}
            {activeTab === "communities" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {[
                  {
                    name: "Mumbai Indians Fans",
                    members: "125K",
                    description: "Official fan club for MI supporters",
                  },
                  {
                    name: "Cricket Legends",
                    members: "89K",
                    description: "Discussing cricket history and legends",
                  },
                  {
                    name: "Young Cricketers",
                    members: "67K",
                    description: "Aspiring cricketers sharing tips",
                  },
                  {
                    name: "Women in Cricket",
                    members: "45K",
                    description: "Celebrating women cricketers",
                  },
                ].map((community, index) => (
                  <motion.div
                    key={community.name}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">
                        {community.name}
                      </h3>
                      <span className="text-cyan-400 text-sm">
                        {community.members} members
                      </span>
                    </div>
                    <p className="text-slate-400 mb-4">
                      {community.description}
                    </p>
                    <motion.button
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Join Community
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Achievements */}
            {activeTab === "achievements" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {[
                  {
                    title: "Super Fan",
                    description: "Posted 100+ times",
                    icon: Star,
                    unlocked: true,
                  },
                  {
                    title: "Match Predictor",
                    description: "Predicted 50 match outcomes correctly",
                    icon: Zap,
                    unlocked: true,
                  },
                  {
                    title: "Community Builder",
                    description: "Started 10 discussions",
                    icon: Users,
                    unlocked: false,
                  },
                  {
                    title: "Legend",
                    description: "Been a fan for 5+ years",
                    icon: Trophy,
                    unlocked: false,
                  },
                ].map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div
                      key={achievement.title}
                      className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 ${
                        achievement.unlocked ? "border-yellow-500/50" : ""
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center">
                        <div
                          className={`p-3 rounded-full mr-4 ${
                            achievement.unlocked
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-slate-700 text-slate-400"
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3
                            className={`text-lg font-semibold ${
                              achievement.unlocked
                                ? "text-white"
                                : "text-slate-400"
                            }`}
                          >
                            {achievement.title}
                          </h3>
                          <p className="text-slate-400 text-sm">
                            {achievement.description}
                          </p>
                        </div>
                        {achievement.unlocked && (
                          <div className="ml-auto">
                            <span className="text-yellow-400 text-sm font-semibold">
                              Unlocked
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <motion.button
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Create Post
                </motion.button>
                <motion.button
                  className="w-full bg-slate-700 text-white py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Community
                </motion.button>
                <motion.button
                  className="w-full bg-slate-700 text-white py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Profile
                </motion.button>
              </div>
            </motion.div>

            {/* Active Users */}
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Active Fans
              </h3>
              <div className="space-y-3">
                {[
                  "CricketKing",
                  "FanZoneHero",
                  "MatchWatcher",
                  "CricketQueen",
                ].map((user, index) => (
                  <div key={user} className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                      {user[0]}
                    </div>
                    <span className="text-slate-300">{user}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FanZone;
