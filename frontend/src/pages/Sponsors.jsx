import React from "react";
import { motion } from "framer-motion";

const Sponsors = () => {
  const sponsors = {
    platinum: ["Nike", "Pepsi", "Vivo"],
    gold: ["Byju's", "Oppo", "Dream11"],
    silver: ["Red Bull", "Gatorade", "Addidas"],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Our Sponsors
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Proud partners powering the Cricket Premier League
        </p>
      </div>

      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">
            Platinum Sponsors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsors.platinum.map((sponsor, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/30 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {sponsor[0]}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">{sponsor}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center text-gray-400 mb-8">
            Gold Sponsors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsors.gold.map((sponsor, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-gray-400/20 to-gray-600/20 backdrop-blur-sm rounded-xl p-8 border border-gray-400/30 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">
                    {sponsor[0]}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{sponsor}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center text-slate-500 mb-8">
            Silver Sponsors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsors.silver.map((sponsor, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center"
              >
                <div className="w-12 h-12 bg-slate-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">
                    {sponsor[0]}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{sponsor}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-12 inline-block"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Become a Sponsor
          </h3>
          <p className="text-blue-100 mb-6">
            Join the elite league of cricket sponsors
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sponsors;
