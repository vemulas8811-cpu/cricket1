import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  TrendingUp,
  Award,
  MapPin,
  Clock,
} from "lucide-react";

const Careers = () => {
  const openings = [
    {
      title: "Senior Cricket Analyst",
      department: "Sports Analytics",
      location: "Mumbai",
      type: "Full-time",
      experience: "3-5 years",
    },
    {
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Mumbai",
      type: "Full-time",
      experience: "4-6 years",
    },
    {
      title: "Broadcast Technician",
      department: "Technology",
      location: "Mumbai",
      type: "Full-time",
      experience: "2-4 years",
    },
    {
      title: "Content Creator",
      department: "Media",
      location: "Remote",
      type: "Full-time",
      experience: "1-3 years",
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "Mumbai",
      type: "Full-time",
      experience: "3-5 years",
    },
    {
      title: "Event Coordinator",
      department: "Operations",
      location: "Mumbai",
      type: "Full-time",
      experience: "2-4 years",
    },
  ];

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Industry-leading compensation packages",
    },
    {
      title: "Health Insurance",
      description: "Comprehensive medical coverage for you and your family",
    },
    {
      title: "Flexible Work",
      description: "Remote work options and flexible hours",
    },
    {
      title: "Professional Development",
      description: "Continuous learning and growth opportunities",
    },
    {
      title: "Team Events",
      description: "Exclusive access to matches and team events",
    },
    {
      title: "Innovation Culture",
      description: "Work with cutting-edge technology and ideas",
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
            Careers at CPL
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the world's most exciting cricket league and be part of
            something extraordinary. We're looking for passionate individuals
            who want to revolutionize sports entertainment.
          </p>
        </div>

        {/* Hero Section */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">500+</h3>
              <p className="text-slate-400">Team Members</p>
            </div>
            <div>
              <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">15+</h3>
              <p className="text-slate-400">Years of Excellence</p>
            </div>
            <div>
              <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Global</h3>
              <p className="text-slate-400">Impact</p>
            </div>
          </div>
        </motion.div>

        {/* Why Join Us */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Join CPL?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Openings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Current Openings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openings.map((opening, index) => (
              <motion.div
                key={opening.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {opening.title}
                    </h3>
                    <p className="text-cyan-400 text-sm">
                      {opening.department}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      opening.type === "Full-time"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {opening.type}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {opening.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {opening.experience}
                  </div>
                </div>

                <motion.button
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Briefcase className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See Your Role?
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume
            and let's discuss opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Resume
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

export default Careers;
