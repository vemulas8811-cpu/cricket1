import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Calendar,
  Users,
  TrendingUp,
  Video,
  Image,
  FileText,
} from "lucide-react";

const MediaCenter = () => {
  const [activeTab, setActiveTab] = useState("videos");

  const tabs = [
    { id: "videos", label: "Videos", icon: Video },
    { id: "photos", label: "Photos", icon: Image },
    { id: "news", label: "News", icon: FileText },
  ];

  const videos = [
    {
      id: 1,
      title: "CPL 2026 Opening Ceremony",
      duration: "15:30",
      views: "2.1M",
      date: "March 1, 2026",
    },
    {
      id: 2,
      title: "Player Press Conference",
      duration: "28:45",
      views: "890K",
      date: "March 5, 2026",
    },
    {
      id: 3,
      title: "Behind the Scenes: Team Prep",
      duration: "12:15",
      views: "1.5M",
      date: "March 8, 2026",
    },
  ];

  const photos = [
    {
      id: 1,
      title: "Opening Ceremony Highlights",
      count: 45,
      date: "March 1, 2026",
    },
    {
      id: 2,
      title: "Practice Session Photos",
      count: 67,
      date: "March 3, 2026",
    },
    { id: 3, title: "Fan Interactions", count: 89, date: "March 6, 2026" },
  ];

  const news = [
    {
      id: 1,
      title: "CPL 2026 Schedule Announced",
      excerpt: "The complete tournament schedule has been released...",
      date: "Feb 28, 2026",
    },
    {
      id: 2,
      title: "New Teams Join the League",
      excerpt: "Two new franchises have been added to CPL...",
      date: "Feb 25, 2026",
    },
    {
      id: 3,
      title: "Player Auction Results",
      excerpt: "Record-breaking bids in this year's auction...",
      date: "Feb 20, 2026",
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
            Media Center
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Official videos, photos, and news from CPL 2026
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Videos", value: "156", icon: Video },
            { label: "Photos", value: "2.3K", icon: Image },
            { label: "News Articles", value: "89", icon: FileText },
            { label: "Total Views", value: "15.2M", icon: TrendingUp },
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

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative">
                  <Play className="w-12 h-12 text-cyan-400" />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2">
                    {video.title}
                  </h3>
                  <div className="flex justify-between text-sm text-slate-400">
                    <span>{video.views} views</span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Photos Tab */}
        {activeTab === "photos" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <Image className="w-12 h-12 text-slate-400" />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2">
                    {photo.title}
                  </h3>
                  <div className="flex justify-between text-sm text-slate-400">
                    <span>{photo.count} photos</span>
                    <span>{photo.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* News Tab */}
        {activeTab === "news" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {news.map((article, index) => (
              <motion.div
                key={article.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {article.title}
                    </h3>
                    <p className="text-slate-400 mb-4">{article.excerpt}</p>
                    <span className="text-cyan-400 text-sm">
                      {article.date}
                    </span>
                  </div>
                  <FileText className="w-8 h-8 text-slate-400 ml-4" />
                </div>
                <motion.button
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More →
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default MediaCenter;
