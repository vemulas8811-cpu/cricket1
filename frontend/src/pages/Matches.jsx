import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Trophy, Users, Play } from "lucide-react";

const Matches = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const matches = [
    {
      id: 1,
      team1: "River Side Riders",
      team2: "Falcon Cricket Club",
      date: "2026-05-15",
      time: "7:30 PM",
      venue: "Green Valley Stadium",
      status: "upcoming",
      tournament: "CPL 2026",
      category: "upcoming",
    },
    {
      id: 2,
      team1: "Green Field Warriors",
      team2: "Village Strikers",
      date: "2026-05-12",
      time: "8:00 PM",
      venue: "City Cricket Ground",
      status: "live",
      score: { team1: 145, team2: 98, overs: "18.3" },
      tournament: "CPL 2026",
      category: "live",
    },
    {
      id: 3,
      team1: "River Side Riders",
      team2: "Green Field Warriors",
      date: "2026-05-10",
      time: "6:00 PM",
      venue: "Premier Cricket Arena",
      status: "completed",
      score: { team1: 185, team2: 172, winner: "River Side Riders" },
      tournament: "CPL 2026",
      category: "completed",
    },
    {
      id: 4,
      team1: "Falcon Cricket Club",
      team2: "Village Strikers",
      date: "2026-05-08",
      time: "5:30 PM",
      venue: "Heritage Cricket Ground",
      status: "completed",
      score: { team1: 156, team2: 158, winner: "Village Strikers" },
      tournament: "CPL 2026",
      category: "completed",
    },
    {
      id: 5,
      team1: "Green Field Warriors",
      team2: "Falcon Cricket Club",
      date: "2026-05-18",
      time: "7:00 PM",
      venue: "Modern Sports Complex",
      status: "upcoming",
      tournament: "CPL 2026",
      category: "upcoming",
    },
    {
      id: 6,
      team1: "Village Strikers",
      team2: "River Side Riders",
      date: "2026-05-20",
      time: "8:30 PM",
      venue: "Elite Cricket Stadium",
      status: "upcoming",
      tournament: "CPL 2026",
      category: "upcoming",
    },
  ];

  const filteredMatches =
    activeFilter === "all"
      ? matches
      : matches.filter((match) => match.category === activeFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case "live":
        return "bg-red-500 text-white";
      case "upcoming":
        return "bg-blue-500 text-white";
      case "completed":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "live":
        return "LIVE";
      case "upcoming":
        return "UPCOMING";
      case "completed":
        return "COMPLETED";
      default:
        return "UNKNOWN";
    }
  };

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
            Matches
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow all the action from the Cricket Premier League
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-xl p-2">
            <div className="flex gap-2">
              {["all", "live", "upcoming", "completed"].map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-blue-500 text-white shadow-lg"
                      : "text-gray-600 hover:text-blue-600 hover:bg-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter === "all"
                    ? "All Matches"
                    : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMatches.map((match, index) => (
            <motion.div
              key={match.id}
              className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Status Badge */}
              <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(match.status)}`}
                >
                  {getStatusText(match.status)}
                </span>
              </div>

              {/* Match Content */}
              <div className="p-6">
                {/* Teams */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center flex-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Trophy className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm">
                        {match.team1}
                      </h3>
                    </div>
                    <div className="px-4">
                      <span className="text-2xl font-bold text-gray-400">
                        VS
                      </span>
                    </div>
                    <div className="text-center flex-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Trophy className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm">
                        {match.team2}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Score (for live/completed matches) */}
                {match.score && (
                  <div className="text-center mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold text-blue-600">
                        {match.score.team1}
                        {match.score.team1Wickets !== undefined &&
                          `/${match.score.team1Wickets}`}
                      </span>
                      <span className="text-sm text-gray-500">
                        {match.score.overs && `(${match.score.overs})`}
                      </span>
                      <span className="text-lg font-bold text-cyan-600">
                        {match.score.team2}
                        {match.score.team2Wickets !== undefined &&
                          `/${match.score.team2Wickets}`}
                      </span>
                    </div>
                    {match.winner && (
                      <div className="text-sm text-green-600 font-semibold">
                        {match.winner} won
                      </div>
                    )}
                  </div>
                )}

                {/* Match Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {match.date}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {match.time}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {match.venue}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Trophy className="w-4 h-4 mr-2" />
                    {match.tournament}
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    match.status === "live"
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : match.status === "upcoming"
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-green-500 hover:bg-green-600 text-white"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {match.status === "live" && <Play className="w-4 h-4 mr-2" />}
                  {match.status === "live"
                    ? "Watch Live"
                    : match.status === "upcoming"
                      ? "Set Reminder"
                      : "View Summary"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredMatches.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No matches found
            </h3>
            <p className="text-gray-500">
              Check back later for upcoming matches in this category.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Matches;
