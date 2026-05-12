import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Download,
  Star,
  Shield,
  Zap,
  Users,
  Play,
  Apple,
  Smartphone as Android,
} from "lucide-react";

const MobileAppPromo = () => {
  const [activeTab, setActiveTab] = useState("features");

  const tabs = [
    { id: "features", label: "Features" },
    { id: "screenshots", label: "Screenshots" },
    { id: "reviews", label: "Reviews" },
  ];

  const features = [
    {
      icon: "📱",
      title: "Live Match Updates",
      description:
        "Real-time scores, ball-by-ball commentary, and instant notifications for every match",
    },
    {
      icon: "🎯",
      title: "Fantasy Cricket",
      description:
        "Create your dream team, compete with friends, and win exciting prizes",
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description:
        "Detailed player stats, team analysis, and predictive insights",
    },
    {
      icon: "🎥",
      title: "Live Streaming",
      description:
        "Watch matches in HD quality with multiple camera angles and expert commentary",
    },
    {
      icon: "💬",
      title: "Fan Community",
      description:
        "Connect with fellow fans, share opinions, and join discussions",
    },
    {
      icon: "🏆",
      title: "Exclusive Content",
      description:
        "Behind-the-scenes videos, player interviews, and premium content",
    },
    {
      icon: "🎫",
      title: "Ticket Booking",
      description:
        "Book tickets instantly with exclusive app-only deals and offers",
    },
    {
      icon: "🛒",
      title: "Official Merchandise",
      description:
        "Shop team jerseys, accessories, and collectibles with fast delivery",
    },
  ];

  const screenshots = [
    {
      title: "Live Match Screen",
      description: "Real-time match updates and commentary",
      image: "LIVE",
    },
    {
      title: "Fantasy Team Creation",
      description: "Build your winning fantasy team",
      image: "FANTASY",
    },
    {
      title: "Player Statistics",
      description: "Detailed performance analytics",
      image: "STATS",
    },
    {
      title: "Fan Community",
      description: "Connect and discuss with fans",
      image: "COMMUNITY",
    },
    {
      title: "Ticket Booking",
      description: "Easy ticket purchase process",
      image: "TICKETS",
    },
    {
      title: "Merchandise Store",
      description: "Official CPL merchandise shopping",
      image: "STORE",
    },
  ];

  const reviews = [
    {
      name: "Rahul Sharma",
      rating: 5,
      review:
        "Best cricket app ever! The live streaming quality is amazing and fantasy features are top-notch.",
      date: "2 days ago",
      verified: true,
    },
    {
      name: "Priya Patel",
      rating: 5,
      review:
        "Love the community features. Finally, a place where cricket fans can connect and share their passion.",
      date: "1 week ago",
      verified: true,
    },
    {
      name: "Amit Kumar",
      rating: 4,
      review:
        "Great app for staying updated with CPL. The notifications are timely and stats are detailed.",
      date: "2 weeks ago",
      verified: true,
    },
    {
      name: "Sneha Reddy",
      rating: 5,
      review:
        "The merchandise section is fantastic. Got my team jersey delivered in 2 days!",
      date: "3 weeks ago",
      verified: true,
    },
    {
      name: "Vikram Singh",
      rating: 5,
      review:
        "Fantasy cricket on this app is addictive. Won ₹5000 in my first tournament!",
      date: "1 month ago",
      verified: true,
    },
  ];

  const stats = [
    { number: "10M+", label: "Downloads" },
    { number: "4.8", label: "App Rating" },
    { number: "500K+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center">
              <Smartphone className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            CPL Mobile App
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Experience cricket like never before with the official CPL mobile
            app - your gateway to the ultimate cricket experience
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.button
              className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Apple className="w-6 h-6 mr-3" />
              Download for iOS
            </motion.button>
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Android className="w-6 h-6 mr-3" />
              Download for Android
            </motion.button>
          </div>

          {/* App Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="text-2xl font-bold text-cyan-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 border border-slate-700">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                      : "text-slate-400 hover:text-white hover:bg-slate-700"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "features" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === "screenshots" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="aspect-[9/16] bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <span className="text-slate-400 text-lg font-semibold">
                    {screenshot.image}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {screenshot.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === "reviews" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white font-semibold">{review.name}</h3>
                    <div className="flex items-center mt-1">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                      {review.verified && (
                        <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-slate-400 text-sm">{review.date}</span>
                </div>
                <p className="text-slate-300">{review.review}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* App Benefits */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Lightning Fast
            </h3>
            <p className="text-slate-400 text-sm">
              Instant updates and seamless performance
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Secure & Safe
            </h3>
            <p className="text-slate-400 text-sm">
              Bank-grade security for all transactions
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Community Driven
            </h3>
            <p className="text-slate-400 text-sm">
              Connect with millions of cricket fans
            </p>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Download Now & Join the Revolution
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Don't miss out on the ultimate cricket experience. Download the CPL
            app today and be part of the most exciting cricket league in the
            world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Apple className="w-6 h-6 mr-3" />
              App Store
            </motion.button>
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Android className="w-6 h-6 mr-3" />
              Google Play
            </motion.button>
          </div>
          <p className="text-slate-400 text-sm mt-4">
            Free download • No in-app purchases required
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MobileAppPromo;
