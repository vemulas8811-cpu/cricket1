import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Calendar,
  MapPin,
  Star,
  Award,
  BookOpen,
  Target,
} from "lucide-react";

const CricketAcademy = () => {
  const [selectedProgram, setSelectedProgram] = useState("all");

  const programs = [
    { id: "all", label: "All Programs", count: 12 },
    { id: "beginner", label: "Beginner", count: 4 },
    { id: "intermediate", label: "Intermediate", count: 4 },
    { id: "advanced", label: "Advanced", count: 4 },
  ];

  const courses = [
    {
      id: 1,
      title: "Cricket Fundamentals",
      level: "Beginner",
      duration: "3 months",
      fee: "₹15,000",
      rating: 4.8,
      students: 45,
      instructor: "Rahul Dravid",
      description:
        "Learn the basics of cricket including batting, bowling, and fielding techniques.",
      features: [
        "Basic Batting",
        "Bowling Action",
        "Fielding Positions",
        "Rules & Regulations",
      ],
      schedule: "Mon, Wed, Fri - 6:00 PM to 8:00 PM",
    },
    {
      id: 2,
      title: "Advanced Batting Techniques",
      level: "Advanced",
      duration: "6 months",
      fee: "₹35,000",
      rating: 4.9,
      students: 28,
      instructor: "Sachin Tendulkar",
      description:
        "Master advanced batting skills with personalized coaching from legends.",
      features: [
        "Shot Selection",
        "Footwork Drills",
        "Mental Training",
        "Video Analysis",
      ],
      schedule: "Tue, Thu, Sat - 7:00 AM to 10:00 AM",
    },
    {
      id: 3,
      title: "Spin Bowling Mastery",
      level: "Intermediate",
      duration: "4 months",
      fee: "₹25,000",
      rating: 4.7,
      students: 32,
      instructor: "Anil Kumble",
      description:
        "Develop spin bowling skills with focus on accuracy and variation.",
      features: [
        "Grip & Release",
        "Flight Control",
        "Wicket-taking Balls",
        "Field Placement",
      ],
      schedule: "Mon, Wed, Fri - 5:00 PM to 7:00 PM",
    },
    {
      id: 4,
      title: "Wicket-keeping Excellence",
      level: "Intermediate",
      duration: "5 months",
      fee: "₹30,000",
      rating: 4.6,
      students: 24,
      instructor: "MS Dhoni",
      description:
        "Comprehensive wicket-keeping training with emphasis on reflexes and technique.",
      features: [
        "Stance & Positioning",
        "Catching Drills",
        "Footwork",
        "Leadership Skills",
      ],
      schedule: "Tue, Thu - 6:30 PM to 8:30 PM",
    },
    {
      id: 5,
      title: "Fast Bowling Power",
      level: "Advanced",
      duration: "6 months",
      fee: "₹40,000",
      rating: 4.8,
      students: 20,
      instructor: "Zaheer Khan",
      description:
        "Intensive fast bowling program focusing on pace, accuracy, and injury prevention.",
      features: [
        "Run-up Technique",
        "Action Refinement",
        "Fitness Training",
        "Injury Prevention",
      ],
      schedule: "Mon, Wed, Sat - 6:00 AM to 9:00 AM",
    },
    {
      id: 6,
      title: "Youth Cricket Development",
      level: "Beginner",
      duration: "6 months",
      fee: "₹12,000",
      rating: 4.5,
      students: 60,
      instructor: "Youth Coaches",
      description:
        "Fun and engaging cricket training for young aspiring cricketers aged 8-14.",
      features: [
        "Age-appropriate Training",
        "Fun Activities",
        "Basic Skills",
        "Team Building",
      ],
      schedule: "Sat, Sun - 9:00 AM to 12:00 PM",
    },
  ];

  const facilities = [
    {
      title: "Training Grounds",
      description:
        "Multiple well-maintained cricket grounds with different pitch conditions",
      icon: "🏏",
    },
    {
      title: "Gym & Fitness Center",
      description:
        "State-of-the-art fitness equipment for strength and conditioning",
      icon: "💪",
    },
    {
      title: "Video Analysis Lab",
      description: "Advanced video analysis tools for technique improvement",
      icon: "📹",
    },
    {
      title: "Medical Support",
      description: "On-site physiotherapists and medical professionals",
      icon: "🏥",
    },
  ];

  const filteredCourses =
    selectedProgram === "all"
      ? courses
      : courses.filter(
          (course) => course.level.toLowerCase() === selectedProgram,
        );

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "text-green-400 bg-green-500/20";
      case "Intermediate":
        return "text-yellow-400 bg-yellow-500/20";
      case "Advanced":
        return "text-red-400 bg-red-500/20";
      default:
        return "text-slate-400 bg-slate-500/20";
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
            Cricket Academy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Train with legends and master the game at CPL's world-class cricket
            academy
          </p>
        </div>

        {/* Academy Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GraduationCap className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">200+</div>
            <div className="text-slate-400 text-sm">Students Trained</div>
          </motion.div>

          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Award className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">15</div>
            <div className="text-slate-400 text-sm">Expert Coaches</div>
          </motion.div>

          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Star className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">4.7</div>
            <div className="text-slate-400 text-sm">Average Rating</div>
          </motion.div>

          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <BookOpen className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">12</div>
            <div className="text-slate-400 text-sm">Programs Offered</div>
          </motion.div>
        </div>

        {/* Program Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 border border-slate-700">
            <div className="flex space-x-2">
              {programs.map((program) => (
                <motion.button
                  key={program.id}
                  onClick={() => setSelectedProgram(program.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedProgram === program.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                      : "text-slate-400 hover:text-white hover:bg-slate-700"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {program.label} ({program.count})
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
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
                    <h3 className="text-xl font-bold text-white mb-2">
                      {course.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor(course.level)}`}
                    >
                      {course.level}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-cyan-400 font-bold text-lg">
                      {course.fee}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {course.duration}
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(course.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-slate-600"
                        }`}
                      />
                    ))}
                    <span className="text-slate-400 text-sm ml-1">
                      {course.rating}
                    </span>
                  </div>
                  <div className="flex items-center text-slate-400 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students} students
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-4">
                  {course.description}
                </p>

                <div className="mb-4">
                  <div className="text-white font-semibold mb-2">
                    Instructor: {course.instructor}
                  </div>
                  <div className="text-slate-400 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {course.schedule}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">
                    What you'll learn:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {course.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="text-slate-400 text-xs flex items-center"
                      >
                        <Target className="w-3 h-3 mr-1 text-cyan-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <motion.button
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Facilities */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            World-Class Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{facility.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {facility.title}
                </h3>
                <p className="text-slate-400 text-sm">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your Cricket Journey
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Join thousands of aspiring cricketers who have transformed their
            game at CPL Academy. From beginners to professionals, we have the
            perfect program for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Free Trial
            </motion.button>
            <motion.button
              className="bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Visit
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CricketAcademy;
