import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star, TrendingUp, Award, Users, Target } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: "Rohit Sharma",
      role: "MI Captain",
      image: "RS",
      story:
        "From struggling in domestic cricket to becoming one of the most destructive openers in world cricket. CPL gave me the platform to showcase my talent.",
      achievements: [
        "MI Captain",
        "IPL Orange Cap 2019",
        "Indian ODI Captain",
        "100+ International Centuries",
      ],
      stats: { matches: 245, runs: 10256, average: 49.8 },
      quote: "CPL is not just a league, it's a launchpad for dreams.",
    },
    {
      id: 2,
      name: "Jasprit Bumrah",
      role: "MI Bowler",
      image: "JB",
      story:
        "Started as an underdog from Gujarat, CPL transformed me into a world-class fast bowler. The competition and exposure changed everything.",
      achievements: [
        "MI Speedster",
        "IPL Purple Cap 2017",
        "Indian Test Vice-Captain",
        "World Cup Winner 2023",
      ],
      stats: { matches: 198, wickets: 187, average: 23.4 },
      quote:
        "Every fast bowler dreams of playing in front of passionate crowds, and CPL made that possible.",
    },
    {
      id: 3,
      name: "Andre Russell",
      role: "KKR All-rounder",
      image: "AR",
      story:
        "From being doubted to becoming the most feared all-rounder. CPL taught me the value of consistency and hard work.",
      achievements: [
        "KKR Powerhouse",
        "IPL All-rounder of the Year",
        "West Indies T20I Captain",
        "Biggest Six in IPL History",
      ],
      stats: { matches: 156, runs: 2035, wickets: 98 },
      quote:
        "CPL showed me that with the right opportunity, you can achieve anything.",
    },
    {
      id: 4,
      name: "Rishabh Pant",
      role: "DC Wicket-keeper",
      image: "RP",
      story:
        "The young talent from Delhi who revolutionized wicket-keeping. CPL gave me the confidence to express myself freely.",
      achievements: [
        "DC Gladiator",
        "Youngest Indian Test Centurion",
        "IPL Emerging Player 2018",
        "Revolutionary Wicket-keeping Style",
      ],
      stats: { matches: 167, runs: 2832, dismissals: 145 },
      quote: "CPL is where young players get to write their own stories.",
    },
    {
      id: 5,
      name: "Smriti Mandhana",
      role: "RCB Batswoman",
      image: "SM",
      story:
        "Breaking barriers in women's cricket, CPL provided the platform to inspire the next generation of female cricketers.",
      achievements: [
        "RCB Captain",
        "WIPL Most Valuable Player",
        "Indian Women's Team Captain",
        "Trailblazer for Women's Cricket",
      ],
      stats: { matches: 134, runs: 3456, average: 52.3 },
      quote:
        "CPL proved that women's cricket can be as exciting and competitive as men's.",
    },
    {
      id: 6,
      name: "Mohammed Shami",
      role: "PBKS Bowler",
      image: "MS",
      story:
        "From being written off to making a spectacular comeback. CPL showed me that it's never too late to chase your dreams.",
      achievements: [
        "PBKS Spearhead",
        "Comeback Player of the Year",
        "Indian Pace Bowling Legend",
        "World Cup Winner 2023",
      ],
      stats: { matches: 178, wickets: 156, average: 24.8 },
      quote:
        "CPL taught me that with determination, you can always make a comeback.",
    },
  ];

  const milestones = [
    {
      year: "2008",
      title: "League Inauguration",
      description:
        "CPL was launched with 8 teams, revolutionizing Indian cricket",
      icon: "🏏",
    },
    {
      year: "2011",
      title: "First Championship",
      description: "Chennai Super Kings won the inaugural season",
      icon: "🏆",
    },
    {
      year: "2013",
      title: "Global Recognition",
      description: "CPL became the most-watched cricket league worldwide",
      icon: "🌍",
    },
    {
      year: "2018",
      title: "Women's League",
      description: "WIPL was introduced, empowering female cricketers",
      icon: "👩‍🏏",
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description:
        "CPL pioneered digital fan engagement and virtual experiences",
      icon: "📱",
    },
    {
      year: "2023",
      title: "World Cup Triumph",
      description:
        "Multiple CPL stars contributed to India's World Cup victory",
      icon: "🥇",
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
            Success Stories
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Inspiring journeys of cricketers who turned their CPL dreams into
            reality
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {story.image}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {story.name}
                    </h3>
                    <p className="text-cyan-400 font-semibold">{story.role}</p>
                  </div>
                </div>

                {/* Story */}
                <p className="text-slate-300 mb-6 italic">"{story.quote}"</p>
                <p className="text-slate-400 text-sm mb-6">{story.story}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-cyan-400 font-bold text-lg">
                      {story.stats.matches}
                    </div>
                    <div className="text-slate-400 text-sm">Matches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 font-bold text-lg">
                      {story.stats.runs ||
                        story.stats.wickets ||
                        story.stats.dismissals}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {story.stats.runs
                        ? "Runs"
                        : story.stats.wickets
                          ? "Wickets"
                          : "Dismissals"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-400 font-bold text-lg">
                      {story.stats.average}
                    </div>
                    <div className="text-slate-400 text-sm">Average</div>
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-white font-semibold mb-3">
                    Key Achievements:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {story.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CPL Milestones Timeline */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            CPL Milestones
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-blue-600 h-full rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
                  >
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                      <div className="text-3xl mb-2">{milestone.icon}</div>
                      <div className="text-cyan-400 font-bold text-lg mb-1">
                        {milestone.year}
                      </div>
                      <h3 className="text-white font-semibold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 relative z-10"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">500+</div>
            <div className="text-slate-400 text-sm">Careers Launched</div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">50+</div>
            <div className="text-slate-400 text-sm">International Players</div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <Star className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">₹500Cr+</div>
            <div className="text-slate-400 text-sm">Player Earnings</div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <Target className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">1M+</div>
            <div className="text-slate-400 text-sm">Fans Inspired</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Your Success Story Starts Here
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Join the league of extraordinary cricketers who turned their passion
            into profession. Your journey to cricket stardom begins with CPL.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
            <motion.button
              className="bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Opportunities
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SuccessStories;
