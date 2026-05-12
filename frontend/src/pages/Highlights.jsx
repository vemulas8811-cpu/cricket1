import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Calendar, Eye, ThumbsUp, Clock, Trophy } from "lucide-react";

const Highlights = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const highlights = [
    {
      id: 1,
      title: "River Side Riders vs Falcon Cricket Club - Final Thriller",
      duration: "25:30",
      views: "15.2M",
      likes: "892K",
      date: "2026-05-10",
      tournament: "CPL 2026",
      category: "match",
      thumbnail: "RSRvFCC",
      description: "An incredible finish with last-ball six to win the match!",
    },
    {
      id: 2,
      title: "Green Field Warriors - Best Catches of the Season",
      duration: "12:45",
      views: "8.7M",
      likes: "456K",
      date: "2026-05-08",
      tournament: "CPL 2026",
      category: "catches",
      thumbnail: "GFW_Catches",
      description: "Spectacular catches that left fans in awe",
    },
    {
      id: 3,
      title: "Village Strikers - Sixes Galore!",
      duration: "18:20",
      views: "12.3M",
      likes: "678K",
      date: "2026-05-06",
      tournament: "CPL 2026",
      category: "sixes",
      thumbnail: "VS_Sixes",
      description: "The biggest sixes hit in CPL 2026 so far",
    },
    {
      id: 4,
      title: "Falcon Cricket Club - Wickets of the Week",
      duration: "15:10",
      views: "9.8M",
      likes: "543K",
      date: "2026-05-04",
      tournament: "CPL 2026",
      category: "wickets",
      thumbnail: "FCC_Wickets",
      description: "Amazing bowling performances and wicket celebrations",
    },
    {
      id: 5,
      title: "CPL 2026 Opening Ceremony Highlights",
      duration: "22:15",
      views: "25.6M",
      likes: "1.2M",
      date: "2026-05-01",
      tournament: "CPL 2026",
      category: "ceremony",
      thumbnail: "CPL_Opening",
      description:
        "Spectacular opening ceremony with fireworks and performances",
    },
    {
      id: 6,
      title: "Player of the Match - Best Performances",
      duration: "20:45",
      views: "11.4M",
      likes: "623K",
      date: "2026-05-02",
      tournament: "CPL 2026",
      category: "player",
      thumbnail: "POTM",
      description: "Outstanding individual performances from CPL players",
    },
  ];

  const categories = [
    { id: "all", label: "All Highlights", icon: Play },
    { id: "match", label: "Match Highlights", icon: Trophy },
    { id: "catches", label: "Best Catches", icon: Trophy },
    { id: "sixes", label: "Sixes", icon: Trophy },
    { id: "wickets", label: "Wickets", icon: Trophy },
    { id: "ceremony", label: "Ceremonies", icon: Calendar },
    { id: "player", label: "Player Highlights", icon: Trophy },
  ];

  const filteredHighlights =
    selectedCategory === "all"
      ? highlights
      : highlights.filter(
          (highlight) => highlight.category === selectedCategory,
        );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
            Match Highlights
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Relive the most exciting moments from CPL 2026
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-xl p-2 overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category.id
                      ? "bg-blue-500 text-white shadow-lg"
                      : "text-gray-600 hover:text-blue-600 hover:bg-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Thumbnail */}
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <div className="text-4xl font-bold text-blue-600">
                    {highlight.thumbnail}
                  </div>
                  {/* Play Button Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Play className="w-16 h-16 text-white" />
                  </motion.div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                  {highlight.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {highlight.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {highlight.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Eye className="w-4 h-4 mr-1" />
                    {highlight.views}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {highlight.likes}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{highlight.date}</span>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                    {highlight.tournament}
                  </span>
                </div>

                {/* Action Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredHighlights.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No highlights found
            </h3>
            <p className="text-gray-500">
              Check back later for highlights in this category.
            </p>
          </motion.div>
        )}

        {/* Featured Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Featured Highlight
            </h2>
            <p className="text-gray-600">
              Don't miss this incredible moment from CPL 2026
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <div className="h-64 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center">
                  <div className="text-6xl font-bold text-blue-600">
                    FEATURED
                  </div>
                  <motion.button
                    className="absolute inset-0 bg-black/50 flex items-center justify-center hover:bg-black/60 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-20 h-20 text-white" />
                  </motion.button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  River Side Riders vs Falcon Cricket Club - Match Winning Six
                </h3>
                <p className="text-gray-600 mb-4">
                  An unbelievable last-ball six that will go down in CPL
                  history! Watch this incredible moment that decided the fate of
                  the match.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      25.6M views
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      1.8M likes
                    </div>
                  </div>
                  <span className="text-blue-600 font-semibold">CPL 2026</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Highlights;
