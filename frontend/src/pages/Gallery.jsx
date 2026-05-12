import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image, Video, Trophy, Users, Camera } from "lucide-react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("photos");

  const photos = [
    {
      id: 1,
      src: "/api/placeholder/400/300",
      title: "Final Match Highlights",
      category: "Matches",
    },
    {
      id: 2,
      src: "/api/placeholder/400/300",
      title: "Player of the Tournament",
      category: "Awards",
    },
    {
      id: 3,
      src: "/api/placeholder/400/300",
      title: "Team Celebration",
      category: "Celebrations",
    },
    {
      id: 4,
      src: "/api/placeholder/400/300",
      title: "Stadium Atmosphere",
      category: "Stadium",
    },
    {
      id: 5,
      src: "/api/placeholder/400/300",
      title: "Fan Zone",
      category: "Fans",
    },
    {
      id: 6,
      src: "/api/placeholder/400/300",
      title: "Behind the Scenes",
      category: "BTS",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Final Match Full Highlights",
      duration: "45:30",
      views: "2.1M",
    },
    { id: 2, title: "Player Interviews", duration: "12:15", views: "890K" },
    { id: 3, title: "Tournament Recap", duration: "28:45", views: "1.5M" },
  ];

  const tabs = [
    { id: "photos", label: "Photos", icon: Image },
    { id: "videos", label: "Videos", icon: Video },
    { id: "moments", label: "Key Moments", icon: Trophy },
    { id: "fans", label: "Fan Gallery", icon: Users },
  ];

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
            Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Relive the magic of CPL 2026 through our comprehensive collection of
            photos and videos
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 border border-slate-700">
            <div className="flex space-x-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                        : "text-slate-400 hover:text-white hover:bg-slate-700"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} className="mr-2" />
                    {tab.label}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Photos Tab */}
        {activeTab === "photos" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  className="group relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-slate-400" />
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-white font-semibold mb-2">
                        {photo.title}
                      </h3>
                      <span className="text-cyan-400 text-sm">
                        {photo.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  className="group relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg mb-4 flex items-center justify-center">
                    <Video className="w-12 h-12 text-slate-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {video.title}
                  </h3>
                  <div className="flex justify-between text-sm text-slate-400">
                    <span>{video.duration}</span>
                    <span>{video.views} views</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Key Moments Tab */}
        {activeTab === "moments" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {[
              {
                title: "Century by Virat Kohli",
                description: "First century of CPL 2026",
                date: "March 15, 2026",
              },
              {
                title: "Hat-trick by Bumrah",
                description: "Historic hat-trick in final",
                date: "March 20, 2026",
              },
              {
                title: "Record Partnership",
                description: "Highest partnership of 250 runs",
                date: "March 18, 2026",
              },
            ].map((moment, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {moment.title}
                    </h3>
                    <p className="text-slate-400">{moment.description}</p>
                  </div>
                </div>
                <p className="text-cyan-400 text-sm">{moment.date}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Fan Gallery Tab */}
        {activeTab === "fans" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Fan Gallery
              </h2>
              <p className="text-slate-400">
                Share your CPL moments with #CPL2026
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }, (_, i) => (
                <motion.div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Users className="w-8 h-8 text-slate-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Gallery;
