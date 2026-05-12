import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Trophy, Users, Star } from "lucide-react";

const EventTimeline = () => {
  const events = [
    {
      id: 1,
      date: "March 15, 2026",
      time: "20:00",
      title: "Season Opening Ceremony",
      venue: "Wankhede Stadium, Mumbai",
      type: "ceremony",
      description:
        "Grand opening ceremony with fireworks, performances, and player introductions",
      icon: "🎆",
      status: "upcoming",
    },
    {
      id: 2,
      date: "March 15, 2026",
      time: "20:00",
      title: "MI vs CSK - Opening Match",
      venue: "Wankhede Stadium, Mumbai",
      type: "match",
      description:
        "Season kicks off with the traditional clash between Mumbai and Chennai",
      icon: "🏏",
      status: "upcoming",
    },
    {
      id: 3,
      date: "March 22, 2026",
      time: "16:00",
      title: "RCB vs SRH",
      venue: "M. Chinnaswamy Stadium, Bengaluru",
      type: "match",
      description:
        "Royal Challengers face Sunrisers Hyderabad in a high-stakes encounter",
      icon: "🏏",
      status: "upcoming",
    },
    {
      id: 4,
      date: "March 25, 2026",
      time: "20:00",
      title: "Fan Festival Day",
      venue: "Multiple Venues",
      type: "event",
      description:
        "Special day dedicated to fans with meet & greets, autograph sessions, and entertainment",
      icon: "🎉",
      status: "upcoming",
    },
    {
      id: 5,
      date: "April 5, 2026",
      time: "20:00",
      title: "DC vs PBKS",
      venue: "Arun Jaitley Stadium, Delhi",
      type: "match",
      description: "Delhi Capitals host Punjab Kings in the national capital",
      icon: "🏏",
      status: "upcoming",
    },
    {
      id: 6,
      date: "April 12, 2026",
      time: "20:00",
      title: "Qualifier 1 - Top Teams Clash",
      venue: "Eden Gardens, Kolkata",
      type: "playoff",
      description: "First playoff match featuring two top-performing teams",
      icon: "🏆",
      status: "upcoming",
    },
    {
      id: 7,
      date: "April 15, 2026",
      time: "20:00",
      title: "Eliminator Match",
      venue: "Wankhede Stadium, Mumbai",
      type: "playoff",
      description:
        "Crucial eliminator match determining the final playoff spots",
      icon: "🏆",
      status: "upcoming",
    },
    {
      id: 8,
      date: "April 18, 2026",
      time: "20:00",
      title: "Qualifier 2",
      venue: "M. Chinnaswamy Stadium, Bengaluru",
      type: "playoff",
      description: "Second qualifier match with high drama expected",
      icon: "🏆",
      status: "upcoming",
    },
    {
      id: 9,
      date: "April 20, 2026",
      time: "20:00",
      title: "CPL Final",
      venue: "Narendra Modi Stadium, Ahmedabad",
      type: "final",
      description: "The grand finale - crowning the champions of CPL 2026",
      icon: "👑",
      status: "upcoming",
    },
    {
      id: 10,
      date: "April 22, 2026",
      time: "18:00",
      title: "Champions Celebration",
      venue: "Narendra Modi Stadium, Ahmedabad",
      type: "ceremony",
      description: "Victory parade and celebration for the winning team",
      icon: "🎊",
      status: "upcoming",
    },
  ];

  const getEventTypeColor = (type) => {
    switch (type) {
      case "match":
        return "text-blue-400 bg-blue-500/20";
      case "playoff":
        return "text-purple-400 bg-purple-500/20";
      case "final":
        return "text-yellow-400 bg-yellow-500/20";
      case "ceremony":
        return "text-green-400 bg-green-500/20";
      case "event":
        return "text-cyan-400 bg-cyan-500/20";
      default:
        return "text-slate-400 bg-slate-500/20";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-green-400";
      case "live":
        return "text-red-400";
      case "upcoming":
        return "text-cyan-400";
      default:
        return "text-slate-400";
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
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Event Timeline
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Complete schedule of CPL 2026 events, matches, and celebrations
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>

          <div className="space-y-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="relative flex items-start space-x-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="relative z-10 w-16 h-16 bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl">{event.icon}</span>
                </div>

                {/* Event card */}
                <motion.div
                  className="flex-1 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:border-cyan-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {event.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${getEventTypeColor(event.type)}`}
                      >
                        {event.type.charAt(0).toUpperCase() +
                          event.type.slice(1)}
                      </span>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <div className="flex items-center text-slate-400 mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-slate-400">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4">{event.description}</p>

                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-center text-slate-400 mb-4 md:mb-0">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.venue}
                    </div>
                    <div className="flex items-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(event.status)} bg-current/20`}
                      >
                        {event.status.charAt(0).toUpperCase() +
                          event.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Dates Summary */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">March 15</div>
            <div className="text-slate-400 text-sm">Season Starts</div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">April 20</div>
            <div className="text-slate-400 text-sm">Final Match</div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">74</div>
            <div className="text-slate-400 text-sm">Total Matches</div>
          </div>
        </motion.div>

        {/* Event Categories */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Event Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl mb-3">🏏</div>
              <h3 className="text-white font-semibold mb-2">League Matches</h3>
              <p className="text-slate-400 text-sm">60 regular season games</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-white font-semibold mb-2">Playoffs</h3>
              <p className="text-slate-400 text-sm">
                Qualifier and eliminator matches
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl mb-3">👑</div>
              <h3 className="text-white font-semibold mb-2">Final</h3>
              <p className="text-slate-400 text-sm">Championship decider</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl mb-3">🎆</div>
              <h3 className="text-white font-semibold mb-2">Ceremonies</h3>
              <p className="text-slate-400 text-sm">
                Opening and closing events
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl mb-3">🎉</div>
              <h3 className="text-white font-semibold mb-2">Fan Events</h3>
              <p className="text-slate-400 text-sm">
                Special fan engagement activities
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't Miss Any Action
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Stay updated with all CPL events. Get match reminders, exclusive
            content, and behind-the-scenes access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Set Event Reminders
            </motion.button>
            <motion.button
              className="bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Calendar
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EventTimeline;
