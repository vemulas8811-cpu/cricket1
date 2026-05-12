import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Trophy, Users } from "lucide-react";

const LiveMatches = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const matches = [
    {
      id: 1,
      team1: "River Side Riders",
      team2: "Falcon Cricket Club",
      status: "Live",
      score: { team1: "142/4", team2: "138/6" },
      overs: { team1: "18.2", team2: "17.4" },
      date: "2026-05-15",
      time: "7:30 PM",
      venue: "Riverside Stadium",
      tournament: "CPL 2026",
    },
    {
      id: 2,
      team1: "Village Strikers",
      team2: "Green Field Warriors",
      status: "Upcoming",
      date: "2026-05-16",
      time: "3:00 PM",
      venue: "Village Ground",
      tournament: "CPL 2026",
    },
    {
      id: 3,
      team1: "River Side Riders",
      team2: "Village Strikers",
      status: "Completed",
      score: { team1: "185/8", team2: "182/9" },
      winner: "River Side Riders",
      date: "2026-05-14",
      time: "7:30 PM",
      venue: "Riverside Stadium",
      tournament: "CPL 2026",
    },
    {
      id: 4,
      team1: "Falcon Cricket Club",
      team2: "Green Field Warriors",
      status: "Upcoming",
      date: "2026-05-17",
      time: "5:00 PM",
      venue: "Falcon Arena",
      tournament: "CPL 2026",
    },
    {
      id: 5,
      team1: "Village Strikers",
      team2: "Falcon Cricket Club",
      status: "Live",
      score: { team1: "98/2", team2: "95/5" },
      overs: { team1: "12.1", team2: "11.3" },
      date: "2026-05-15",
      time: "1:00 PM",
      venue: "Village Ground",
      tournament: "CPL 2026",
    },
    {
      id: 6,
      team1: "Green Field Warriors",
      team2: "River Side Riders",
      status: "Completed",
      score: { team1: "156/7", team2: "160/5" },
      winner: "River Side Riders",
      date: "2026-05-13",
      time: "3:00 PM",
      venue: "Green Field",
      tournament: "CPL 2026",
    },
  ];

  const filters = [
    { id: "all", label: "All Matches", icon: Trophy },
    { id: "live", label: "Live", icon: Users },
    { id: "upcoming", label: "Upcoming", icon: Calendar },
    { id: "completed", label: "Completed", icon: Trophy },
  ];

  const filteredMatches =
    selectedFilter === "all"
      ? matches
      : matches.filter(
          (match) => match.status.toLowerCase() === selectedFilter,
        );

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
            Live Matches
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with all the action from CPL 2026
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-xl p-2 overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                    selectedFilter === filter.id
                      ? "bg-blue-500 text-white shadow-lg"
                      : "text-gray-600 hover:text-blue-600 hover:bg-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <filter.icon className="w-4 h-4" />
                  {filter.label}
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
              whileHover={{ scale: 1.02 }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(match.status)}`}
                  >
                    {match.status}
                  </span>
                  <span className="text-sm text-gray-600 font-medium">
                    {match.tournament}
                  </span>
                </div>
              </div>

              {/* Teams */}
              <div className="px-6 py-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1 text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {match.team1}
                    </h3>
                    {match.score && (
                      <div className="text-sm text-gray-600">
                        <div className="font-semibold text-blue-600">
                          {match.score.team1}
                        </div>
                        {match.overs && (
                          <div className="text-xs text-gray-500">
                            ({match.overs.team1} overs)
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="px-4">
                    <div className="text-2xl font-bold text-gray-400">VS</div>
                  </div>

                  <div className="flex-1 text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {match.team2}
                    </h3>
                    {match.score && (
                      <div className="text-sm text-gray-600">
                        <div className="font-semibold text-blue-600">
                          {match.score.team2}
                        </div>
                        {match.overs && (
                          <div className="text-xs text-gray-500">
                            ({match.overs.team2} overs)
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Winner Badge */}
                {match.winner && (
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      <Trophy className="w-4 h-4 mr-1" />
                      {match.winner} won
                    </span>
                  </div>
                )}

                {/* Match Details */}
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(match.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {match.time}
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {match.venue}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6 text-center">
                  <motion.button
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {match.status === "Live"
                      ? "Watch Live"
                      : match.status === "Upcoming"
                        ? "Set Reminder"
                        : "View Summary"}
                  </motion.button>
                </div>
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
            <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No matches found
            </h3>
            <p className="text-gray-500">
              Check back later for matches in this category.
            </p>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Tournament Stats
            </h2>
            <p className="text-gray-600">
              Current standings and key statistics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-gray-600">Matches Played</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">3</div>
              <div className="text-gray-600">Live Matches</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
              <div className="text-gray-600">Upcoming</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-gray-600">Teams</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LiveMatches;
