import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  Calendar,
  MapPin,
  DollarSign,
  CheckCircle,
  X,
} from "lucide-react";

const JoinTournament = () => {
  const [selectedTournament, setSelectedTournament] = useState(null);

  const tournaments = [
    {
      id: 1,
      name: "CPL Mega League 2026",
      type: "Premium",
      entryFee: "₹500",
      prizePool: "₹10,00,000",
      maxTeams: 100,
      registeredTeams: 87,
      startDate: "March 15, 2026",
      endDate: "May 20, 2026",
      format: "T20",
      location: "Multiple Venues",
      description: "The flagship tournament of CPL 2026 featuring all 8 teams",
      features: [
        "Live Streaming",
        "Real-time Updates",
        "Fantasy Integration",
        "Prize Money",
      ],
    },
    {
      id: 2,
      name: "CPL Challenger Cup",
      type: "Standard",
      entryFee: "₹200",
      prizePool: "₹2,50,000",
      maxTeams: 50,
      registeredTeams: 34,
      startDate: "April 1, 2026",
      endDate: "April 30, 2026",
      format: "T20",
      location: "DY Patil Stadium",
      description: "A competitive tournament for emerging teams and players",
      features: ["Live Scoring", "Team Registration", "Networking Events"],
    },
    {
      id: 3,
      name: "CPL Youth Championship",
      type: "Free",
      entryFee: "Free",
      prizePool: "₹1,00,000",
      maxTeams: 32,
      registeredTeams: 28,
      startDate: "June 1, 2026",
      endDate: "June 15, 2026",
      format: "T20",
      location: "Various Grounds",
      description: "Showcase young talent and discover future stars",
      features: [
        "Scouting Opportunities",
        "Development Programs",
        "Media Coverage",
      ],
    },
    {
      id: 4,
      name: "CPL Corporate League",
      type: "Corporate",
      entryFee: "₹1000",
      prizePool: "₹5,00,000",
      maxTeams: 20,
      registeredTeams: 12,
      startDate: "May 10, 2026",
      endDate: "May 25, 2026",
      format: "T20",
      location: "Corporate Stadiums",
      description: "Exclusive tournament for corporate teams and employees",
      features: [
        "Corporate Branding",
        "Team Building",
        "Networking",
        "CSR Impact",
      ],
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "Premium":
        return "text-yellow-400 bg-yellow-500/20";
      case "Standard":
        return "text-blue-400 bg-blue-500/20";
      case "Free":
        return "text-green-400 bg-green-500/20";
      case "Corporate":
        return "text-purple-400 bg-purple-500/20";
      default:
        return "text-slate-400 bg-slate-500/20";
    }
  };

  const handleJoinTournament = (tournament) => {
    setSelectedTournament(tournament);
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
            Join Tournament
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose from various CPL tournaments and showcase your team's talent
            on the biggest stage
          </p>
        </div>

        {/* Tournament Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tournaments.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {tournament.name}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(tournament.type)}`}
                    >
                      {tournament.type}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-cyan-400 font-bold text-xl">
                      {tournament.entryFee}
                    </div>
                    <div className="text-slate-400 text-sm">Entry Fee</div>
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-4">
                  {tournament.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-green-400 font-semibold">
                      {tournament.prizePool}
                    </div>
                    <div className="text-slate-400 text-sm">Prize Pool</div>
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      {tournament.registeredTeams}/{tournament.maxTeams}
                    </div>
                    <div className="text-slate-400 text-sm">
                      Teams Registered
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-slate-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {tournament.startDate} - {tournament.endDate}
                  </div>
                  <div className="flex items-center text-slate-400 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {tournament.location}
                  </div>
                  <div className="flex items-center text-slate-400 text-sm">
                    <Trophy className="w-4 h-4 mr-2" />
                    {tournament.format} Format
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tournament.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  onClick={() => handleJoinTournament(tournament)}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tournament.registeredTeams >= tournament.maxTeams
                    ? "Tournament Full"
                    : "Join Tournament"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Registration Modal */}
        {selectedTournament && (
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mx-auto max-h-[90vh] w-full max-w-md overflow-y-auto rounded-xl border border-slate-700 bg-slate-800 p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Join {selectedTournament.name}
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-400">Entry Fee:</span>
                  <span className="text-white font-semibold">
                    {selectedTournament.entryFee}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Prize Pool:</span>
                  <span className="text-green-400 font-semibold">
                    {selectedTournament.prizePool}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Format:</span>
                  <span className="text-white">
                    {selectedTournament.format}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Duration:</span>
                  <span className="text-white">
                    {selectedTournament.startDate} -{" "}
                    {selectedTournament.endDate}
                  </span>
                </div>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-2">
                  Registration Requirements:
                </h3>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li>• Valid team registration</li>
                  <li>• Minimum 11 players</li>
                  <li>• Payment of entry fee</li>
                  <li>• Acceptance of tournament rules</li>
                </ul>
              </div>

              <div className="flex space-x-4">
                <motion.button
                  onClick={() => setSelectedTournament(null)}
                  className="flex-1 bg-slate-700 text-white py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Confirm Registration
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Tournament Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">4</div>
            <div className="text-slate-400 text-sm">Active Tournaments</div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">161</div>
            <div className="text-slate-400 text-sm">Teams Registered</div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">₹18.5L</div>
            <div className="text-slate-400 text-sm">Total Prize Pool</div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <Calendar className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">Mar-Jun</div>
            <div className="text-slate-400 text-sm">Season Period</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Compete?
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Join the most prestigious cricket tournaments in India. Build your
            legacy and compete with the best teams across the country.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Your Team
            </motion.button>
            <motion.button
              className="bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default JoinTournament;
