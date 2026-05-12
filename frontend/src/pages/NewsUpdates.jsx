import React from "react";
import { motion } from "framer-motion";
import { Newspaper, Calendar, User, TrendingUp } from "lucide-react";

const NewsUpdates = () => {
  const news = [
    {
      id: 1,
      title: "CPL 2026 Tournament Schedule Released",
      excerpt:
        "The complete match schedule for Cricket Premier League 2026 has been announced with exciting fixtures...",
      author: "CPL Media Team",
      date: "February 28, 2026",
      category: "Tournament",
      readTime: "3 min read",
    },
    {
      id: 2,
      title: "New Teams Join the League",
      excerpt:
        "Two new franchises have been officially added to the CPL, bringing fresh talent and excitement...",
      author: "Sports Editor",
      date: "February 25, 2026",
      category: "Teams",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Record-Breaking Player Auction",
      excerpt:
        "This year's player auction saw unprecedented bidding wars and record transfers...",
      author: "Auction Reporter",
      date: "February 20, 2026",
      category: "Auction",
      readTime: "5 min read",
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
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            News & Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest news, announcements, and developments
            from CPL 2026
          </p>
        </div>

        {/* Featured News */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-semibold">Featured</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            CPL 2026: The Biggest Cricket Spectacle Yet
          </h2>
          <p className="text-slate-300 mb-6 max-w-3xl">
            With new teams, star players, and innovative formats, Cricket
            Premier League 2026 promises to be the most exciting season in
            cricket history. Get ready for non-stop action, drama, and
            unforgettable moments.
          </p>
          <div className="flex items-center text-slate-400 text-sm">
            <User className="w-4 h-4 mr-1" />
            <span className="mr-4">CPL Editorial Team</span>
            <Calendar className="w-4 h-4 mr-1" />
            <span>March 1, 2026</span>
          </div>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <motion.div
              key={article.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    article.category === "Tournament"
                      ? "bg-blue-500/20 text-blue-400"
                      : article.category === "Teams"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-purple-500/20 text-purple-400"
                  }`}
                >
                  {article.category}
                </span>
                <span className="text-slate-400 text-sm">
                  {article.readTime}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {article.title}
              </h3>
              <p className="text-slate-400 mb-4">{article.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-slate-400 text-sm">
                  <User className="w-4 h-4 mr-1" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center text-slate-400 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{article.date}</span>
                </div>
              </div>

              <motion.button
                className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Full Article
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Stay Informed</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Get the latest CPL news delivered straight to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewsUpdates;
