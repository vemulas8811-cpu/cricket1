import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const TournamentSchedule = () => {
  const matches = [
    {
      id: 1,
      date: "2026-05-10",
      time: "19:30",
      team1: "Hyderabad Warriors",
      team2: "Bangalore Titans",
      venue: "Rajiv Gandhi Stadium",
    },
    {
      id: 2,
      date: "2026-05-12",
      time: "20:00",
      team1: "Mumbai Mavericks",
      team2: "Delhi Dynamos",
      venue: "Wankhede Stadium",
    },
    {
      id: 3,
      date: "2026-05-14",
      time: "19:30",
      team1: "Chennai Champions",
      team2: "Punjab Panthers",
      venue: "Chepauk Stadium",
    },
    {
      id: 4,
      date: "2026-05-16",
      time: "20:00",
      team1: "Kolkata Knights",
      team2: "Rajasthan Royals",
      venue: "Eden Gardens",
    },
    {
      id: 5,
      date: "2026-05-18",
      time: "19:30",
      team1: "Hyderabad Warriors",
      team2: "Mumbai Mavericks",
      venue: "Rajiv Gandhi Stadium",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Tournament Schedule
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Complete match schedule for CPL 2026 season
        </p>
      </div>

      <div className="space-y-6">
        {matches.map((match, index) => (
          <motion.div
            key={match.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">{match.date}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-5 h-5" />
                  <span>{match.time}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-5 h-5" />
                  <span>{match.venue}</span>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-2"></div>
                  <span className="text-white font-semibold">
                    {match.team1}
                  </span>
                </div>
                <div className="text-2xl font-bold text-cyan-400">VS</div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-2"></div>
                  <span className="text-white font-semibold">
                    {match.team2}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TournamentSchedule;
