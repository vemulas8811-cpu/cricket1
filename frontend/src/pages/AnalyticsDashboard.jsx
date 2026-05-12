import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  PieChart,
} from "lucide-react";

const AnalyticsDashboard = () => {
  const metrics = [
    {
      title: "Total Revenue",
      value: "₹2.4B",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-400",
    },
    {
      title: "Active Users",
      value: "15.2M",
      change: "+8.3%",
      icon: Users,
      color: "text-blue-400",
    },
    {
      title: "Match Views",
      value: "892M",
      change: "+15.7%",
      icon: Activity,
      color: "text-purple-400",
    },
    {
      title: "Engagement Rate",
      value: "68.4%",
      change: "+5.2%",
      icon: TrendingUp,
      color: "text-cyan-400",
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
            Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive insights and performance metrics for CPL 2026
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`w-8 h-8 ${metric.color}`} />
                  <span className="text-green-400 text-sm font-semibold">
                    {metric.change}
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {metric.value}
                </div>
                <div className="text-slate-400 text-sm">{metric.title}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Revenue Chart */}
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <BarChart3 className="w-6 h-6 text-cyan-400 mr-2" />
              <h3 className="text-xl font-semibold text-white">
                Revenue Trends
              </h3>
            </div>
            <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-16 h-16 text-slate-400" />
            </div>
          </motion.div>

          {/* User Demographics */}
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <PieChart className="w-6 h-6 text-cyan-400 mr-2" />
              <h3 className="text-xl font-semibold text-white">
                User Demographics
              </h3>
            </div>
            <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
              <PieChart className="w-16 h-16 text-slate-400" />
            </div>
          </motion.div>
        </div>

        {/* Performance Table */}
        <motion.div
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-white mb-6">
            Performance Metrics
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-slate-400 py-3">Metric</th>
                  <th className="text-left text-slate-400 py-3">Current</th>
                  <th className="text-left text-slate-400 py-3">Target</th>
                  <th className="text-left text-slate-400 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    metric: "Monthly Active Users",
                    current: "15.2M",
                    target: "18M",
                    status: "On Track",
                  },
                  {
                    metric: "Average Session Time",
                    current: "24min",
                    target: "30min",
                    status: "Behind",
                  },
                  {
                    metric: "Conversion Rate",
                    current: "3.2%",
                    target: "4.0%",
                    status: "On Track",
                  },
                  {
                    metric: "Revenue per User",
                    current: "₹180",
                    target: "₹200",
                    status: "Behind",
                  },
                ].map((row, index) => (
                  <tr key={row.metric} className="border-b border-slate-700/50">
                    <td className="py-4 text-white">{row.metric}</td>
                    <td className="py-4 text-cyan-400">{row.current}</td>
                    <td className="py-4 text-slate-400">{row.target}</td>
                    <td className="py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          row.status === "On Track"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnalyticsDashboard;
