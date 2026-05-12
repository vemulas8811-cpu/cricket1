import React from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Calendar, Star } from "lucide-react";

const Stadiums = () => {
  const stadiums = [
    {
      name: "Wankhede Stadium",
      city: "Mumbai",
      capacity: "33,108",
      image: "WS",
      rating: 4.9,
      matches: 89,
      description: "Iconic stadium with a rich history, home to Mumbai Indians",
    },
    {
      name: "Eden Gardens",
      city: "Kolkata",
      capacity: "68,000",
      image: "EG",
      rating: 4.8,
      matches: 76,
      description: "Asia's largest cricket stadium, legendary atmosphere",
    },
    {
      name: "Chidambaram Stadium",
      city: "Chennai",
      capacity: "50,000",
      image: "CS",
      rating: 4.7,
      matches: 65,
      description: "Home of Chennai Super Kings, known for bounce",
    },
    {
      name: "DY Patil Stadium",
      city: "Mumbai",
      capacity: "55,000",
      image: "DP",
      rating: 4.6,
      matches: 54,
      description: "Modern facility with excellent facilities",
    },
    {
      name: "Punjab Cricket Association",
      city: "Mohali",
      capacity: "26,950",
      image: "PCA",
      rating: 4.5,
      matches: 43,
      description: "High-scoring venue, home to Punjab Kings",
    },
    {
      name: "Rajiv Gandhi Intl. Cricket Stadium",
      city: "Hyderabad",
      capacity: "55,000",
      image: "RGI",
      rating: 4.4,
      matches: 38,
      description: "Modern stadium with great pitch for batting",
    },
  ];

  const features = [
    {
      title: "Modern Facilities",
      description: "State-of-the-art amenities and technology",
    },
    {
      title: "Fan Experience",
      description: "Unforgettable atmosphere and entertainment",
    },
    {
      title: "Accessibility",
      description: "Easy access and transportation options",
    },
    {
      title: "Hospitality",
      description: "Premium hospitality and catering services",
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
            CPL Stadiums
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience cricket at its finest in world-class stadiums designed
            for unforgettable moments
          </p>
        </div>

        {/* Stadium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stadiums.map((stadium, index) => (
            <motion.div
              key={stadium.name}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <span className="text-slate-400 text-2xl font-bold">
                  {stadium.image}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {stadium.name}
                </h3>
                <div className="flex items-center text-slate-400 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {stadium.city}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-cyan-400 font-semibold">
                      {stadium.capacity}
                    </div>
                    <div className="text-slate-400 text-sm">Capacity</div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(stadium.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-slate-600"
                          }`}
                        />
                      ))}
                      <span className="text-slate-400 text-sm ml-1">
                        {stadium.rating}
                      </span>
                    </div>
                    <div className="text-slate-400 text-sm">Rating</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {stadium.matches} matches
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-4">
                  {stadium.description}
                </p>

                <motion.button
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
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
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Virtual Tour */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Virtual Stadium Tour
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Experience the magic of CPL stadiums from anywhere in the world with
            our immersive virtual tours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Virtual Tour
            </motion.button>
            <motion.button
              className="bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Gallery
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Stadiums;
