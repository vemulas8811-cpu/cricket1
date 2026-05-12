import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Gavel,
  Users,
  TrendingUp,
  Clock,
  DollarSign,
  Star,
} from "lucide-react";

const PlayerAuction = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Players", count: 156 },
    { id: "batsman", label: "Batsmen", count: 45 },
    { id: "bowler", label: "Bowlers", count: 38 },
    { id: "allrounder", label: "All-rounders", count: 32 },
    { id: "wicketkeeper", label: "Wicket-keepers", count: 18 },
    { id: "uncapped", label: "Uncapped", count: 23 },
  ];

  const players = [
    {
      id: 1,
      name: "Virat Kohli",
      role: "Batsman",
      country: "India",
      basePrice: "2 Cr",
      currentBid: "15 Cr",
      team: "RCB",
      rating: 9.5,
      category: "batsman",
      status: "sold",
    },
    {
      id: 2,
      name: "Jasprit Bumrah",
      role: "Bowler",
      country: "India",
      basePrice: "2 Cr",
      currentBid: "12 Cr",
      team: "MI",
      rating: 9.2,
      category: "bowler",
      status: "sold",
    },
    {
      id: 3,
      name: "Steve Smith",
      role: "Batsman",
      country: "Australia",
      basePrice: "2 Cr",
      currentBid: "8 Cr",
      team: "PBKS",
      rating: 8.8,
      category: "batsman",
      status: "sold",
    },
    {
      id: 4,
      name: "Rashid Khan",
      role: "Bowler",
      country: "Afghanistan",
      basePrice: "2 Cr",
      currentBid: "14 Cr",
      team: "SRH",
      rating: 9.0,
      category: "bowler",
      status: "sold",
    },
    {
      id: 5,
      name: "Andre Russell",
      role: "All-rounder",
      country: "West Indies",
      basePrice: "2 Cr",
      currentBid: "16 Cr",
      team: "KKR",
      rating: 9.3,
      category: "allrounder",
      status: "sold",
    },
    {
      id: 6,
      name: "Rishabh Pant",
      role: "Wicket-keeper",
      country: "India",
      basePrice: "2 Cr",
      currentBid: "11 Cr",
      team: "DC",
      rating: 8.9,
      category: "wicketkeeper",
      status: "sold",
    },
    {
      id: 7,
      name: "Pat Cummins",
      role: "All-rounder",
      country: "Australia",
      basePrice: "2 Cr",
      currentBid: "7 Cr",
      team: "SRH",
      rating: 8.7,
      category: "allrounder",
      status: "available",
    },
    {
      id: 8,
      name: "Mohammed Shami",
      role: "Bowler",
      country: "India",
      basePrice: "2 Cr",
      currentBid: "6 Cr",
      team: "PBKS",
      rating: 8.5,
      category: "bowler",
      status: "available",
    },
  ];

  const filteredPlayers =
    selectedCategory === "all"
      ? players
      : players.filter((player) => player.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case "sold":
        return "text-green-400";
      case "available":
        return "text-cyan-400";
      case "unsold":
        return "text-red-400";
      default:
        return "text-slate-400";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "sold":
        return "Sold";
      case "available":
        return "Available";
      case "unsold":
        return "Unsold";
      default:
        return "Unknown";
    }
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
            Player Auction
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Live bidding action from CPL 2026 Mega Auction with real-time
            updates
          </p>
        </div>

        {/* Auction Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">₹120 Cr</div>
            <div className="text-slate-400 text-sm">Total Spent</div>
          </motion.div>

          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">89</div>
            <div className="text-slate-400 text-sm">Players Sold</div>
          </motion.div>

          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">₹13.5 Cr</div>
            <div className="text-slate-400 text-sm">Highest Bid</div>
          </motion.div>

          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">Live</div>
            <div className="text-slate-400 text-sm">Auction Status</div>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 border border-slate-700">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                      : "text-slate-400 hover:text-white hover:bg-slate-700"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label} ({category.count})
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Players Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPlayers.map((player, index) => (
            <motion.div
              key={player.id}
              layout
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {player.name}
                    </h3>
                    <div className="flex items-center text-slate-400 text-sm">
                      <span className="mr-2">{player.role}</span>
                      <span>•</span>
                      <span className="ml-2">{player.country}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(player.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-slate-600"
                        }`}
                      />
                    ))}
                    <span className="text-slate-400 text-sm ml-1">
                      {player.rating}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-slate-400 text-sm">Base Price</div>
                    <div className="text-cyan-400 font-semibold">
                      {player.basePrice}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">Final Bid</div>
                    <div className="text-green-400 font-semibold">
                      {player.currentBid}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white font-bold text-sm">
                        {player.team}
                      </span>
                    </div>
                    <span className="text-white font-semibold">
                      {player.team}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(player.status)} bg-current/20`}
                  >
                    {getStatusText(player.status)}
                  </span>
                </div>

                <motion.button
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Auction Rules */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Auction Rules & Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Bidding Process",
                description:
                  "Teams bid in real-time with minimum bid increments of ₹20 lakhs",
              },
              {
                title: "Player Categories",
                description:
                  "Capped, uncapped, and associate players with different base prices",
              },
              {
                title: "RTM Cards",
                description:
                  "Each team gets 3 Right to Match cards for their marquee players",
              },
              {
                title: "Salary Cap",
                description:
                  "Teams have a total salary cap of ₹120 crores for the season",
              },
              {
                title: "Overseas Quota",
                description: "Maximum 8 overseas players allowed per team",
              },
              {
                title: "Wicket-keeper Rule",
                description: "At least 1 dedicated wicket-keeper in every team",
              },
            ].map((rule, index) => (
              <div key={rule.title} className="bg-slate-800/50 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">{rule.title}</h3>
                <p className="text-slate-400 text-sm">{rule.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PlayerAuction;
