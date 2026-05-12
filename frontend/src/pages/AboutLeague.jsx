import React from "react";
import { motion } from "framer-motion";
import { Trophy, Users, Globe, Calendar, Target, Award } from "lucide-react";

const AboutLeague = () => {
  const stats = [
    { number: "15", label: "Seasons Completed", icon: Calendar },
    { number: "10", label: "Teams", icon: Users },
    { number: "100M+", label: "Global Fans", icon: Globe },
    { number: "₹1000Cr+", label: "Prize Money Distributed", icon: Trophy },
  ];

  const milestones = [
    { year: "2008", event: "CPL Inaugural Season" },
    { year: "2010", event: "First International Player" },
    { year: "2013", event: "Digital Streaming Begins" },
    { year: "2016", event: "Women's League Introduced" },
    { year: "2020", event: "Virtual Reality Integration" },
    { year: "2026", event: "15th Anniversary Season" },
  ];

  const values = [
    {
      title: "Excellence",
      description:
        "Striving for the highest standards in cricket entertainment",
      icon: Award,
    },
    {
      title: "Innovation",
      description: "Pushing boundaries with new technologies and formats",
      icon: Target,
    },
    {
      title: "Community",
      description: "Building a global cricket community",
      icon: Users,
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
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            About CPL
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The Cricket Premier League is the world's most popular and valuable
            cricket league, bringing together the best talent from around the
            globe for an unforgettable spectacle.
          </p>
        </div>

        {/* Hero Section */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Revolutionizing Cricket Entertainment
            </h2>
            <p className="text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Since its inception in 2008, CPL has transformed cricket from a
              traditional sport into a global entertainment phenomenon. With
              cutting-edge technology, star-studded lineups, and innovative
              formats, CPL continues to push the boundaries of what's possible
              in sports entertainment.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
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
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                The Cricket Premier League was born out of a vision to create
                the most exciting cricket competition in the world. Launched in
                2008, CPL brought together the best players, innovative formats,
                and cutting-edge technology to revolutionize how cricket is
                played and watched.
              </p>
              <p>
                From humble beginnings with 8 teams, CPL has grown into a global
                phenomenon with 10 teams, millions of fans, and billions in
                revenue. We've introduced game-changing innovations like
                strategic timeouts, powerplays, and integrated technology that
                enhances the viewing experience.
              </p>
              <p>
                Today, CPL represents the pinnacle of cricket entertainment,
                combining athletic excellence with entertainment spectacle,
                creating moments that transcend sports and become cultural
                phenomena.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Milestones</h2>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="bg-cyan-500/20 text-cyan-400 font-bold px-3 py-1 rounded-lg">
                    {milestone.year}
                  </div>
                  <div className="text-slate-300">{milestone.event}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-400">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Vision for Future */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Looking Ahead</h2>
          <p className="text-slate-300 mb-6 max-w-3xl mx-auto">
            As we celebrate 15 seasons of CPL, we're excited about the future.
            With emerging technologies, new talent, and innovative formats, CPL
            2026 promises to be our most spectacular season yet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Revolution
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutLeague;
