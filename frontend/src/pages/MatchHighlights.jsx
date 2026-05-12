import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Calendar, Eye, ThumbsUp, Share2 } from "lucide-react";

const MatchHighlights = () => {
  const [selectedMatch, setSelectedMatch] = useState("all");

  const matches = [
    {
      id: 1,
      title: "MI vs CSK - Final Thriller",
      date: "April 20, 2026",
      duration: "25:30",
      views: "15.2M",
      likes: "892K",
      thumbnail: "MIvCSK",
      category: "Final",
    },
    {
      id: 2,
      title: "RCB vs PBKS - High Scoring Encounter",
      date: "April 18, 2026",
      duration: "22:15",
      views: "12.8M",
      likes: "756K",
      thumbnail: "RCBvPBKS",
      category: "League",
    },
    {
      id: 3,
      title: "DC vs SRH - Bumrah Masterclass",
      date: "April 16, 2026",
      duration: "28:45",
      views: "11.5M",
      likes: "634K",
      thumbnail: "DCvSRH",
      category: "League",
    },
    {
      id: 4,
      title: "Qualifier 1 - KKR vs MI",
      date: "April 14, 2026",
      duration: "26:20",
      views: "13.9M",
      likes: "789K",
      thumbnail: "KKRvMI",
      category: "Playoff",
    },
    {
      id: 5,
      title: "Eliminator - RCB vs DC",
      date: "April 12, 2026",
      duration: "24:10",
      views: "9.7M",
      likes: "543K",
      thumbnail: "RCBvDC",
      category: "Playoff",
    },
    {
      id: 6,
      title: "Opening Match - CSK vs PBKS",
      date: "March 15, 2026",
      duration: "23:55",
      views: "8.4M",
      likes: "456K",
      thumbnail: "CSKvPBKS",
      category: "League",
    },
  ];

  const categories = [
    { id: "all", label: "All Matches", count: matches.length },
    {
      id: "final",
      label: "Final",
      count: matches.filter((m) => m.category === "Final").length,
    },
    {
      id: "playoff",
      label: "Playoffs",
      count: matches.filter((m) => m.category === "Playoff").length,
    },
    {
      id: "league",
      label: "League",
      count: matches.filter((m) => m.category === "League").length,
    },
  ];

  const filteredMatches =
    selectedMatch === "all"
      ? matches
      : matches.filter(
          (match) => match.category.toLowerCase() === selectedMatch,
        );

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
            Match Highlights
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Relive the most exciting moments from CPL 2026 matches
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 border border-slate-700">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedMatch(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedMatch === category.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                      : "text-slate-400 hover:text-white hover:bg-slate-700"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                  <span className="ml-2 bg-slate-600 text-xs px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredMatches.map((match, index) => (
            <motion.div
              key={match.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-slate-400 text-lg">
                    {match.thumbnail}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    className="bg-cyan-500 rounded-full p-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {match.duration}
                </div>
                <div className="absolute top-2 left-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      match.category === "Final"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : match.category === "Playoff"
                          ? "bg-purple-500/20 text-purple-400"
                          : "bg-cyan-500/20 text-cyan-400"
                    }`}
                  >
                    {match.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-white font-semibold mb-2 line-clamp-2">
                  {match.title}
                </h3>

                <div className="flex items-center text-slate-400 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  {match.date}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-slate-400">
                    <Eye className="w-4 h-4 mr-1" />
                    {match.views}
                  </div>
                  <div className="flex items-center text-slate-400">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {match.likes}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 mt-4">
                  <motion.button
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Watch Now
                  </motion.button>
                  <motion.button
                    className="p-2 bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Share2 className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Never Miss a Moment
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Get instant notifications for match highlights and stay updated with
            all the action
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe to Alerts
            </motion.button>
            <motion.button
              className="bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download App
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MatchHighlights;
