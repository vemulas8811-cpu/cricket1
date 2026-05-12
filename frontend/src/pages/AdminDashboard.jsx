import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Users,
  Trophy,
  Calendar,
  TrendingUp,
  DollarSign,
  Activity,
} from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    { title: "Total Teams", value: "8", icon: Trophy, color: "text-cyan-400" },
    {
      title: "Registered Players",
      value: "120",
      icon: Users,
      color: "text-blue-400",
    },
    {
      title: "Matches Played",
      value: "56",
      icon: Calendar,
      color: "text-green-400",
    },
    {
      title: "Revenue",
      value: "$2.5M",
      icon: DollarSign,
      color: "text-yellow-400",
    },
    {
      title: "Fan Engagement",
      value: "2.1M",
      icon: TrendingUp,
      color: "text-purple-400",
    },
    {
      title: "Active Users",
      value: "850K",
      icon: Activity,
      color: "text-red-400",
    },
  ];

  const revenueData = [
    { month: "Jan", revenue: 200000 },
    { month: "Feb", revenue: 350000 },
    { month: "Mar", revenue: 280000 },
    { month: "Apr", revenue: 420000 },
    { month: "May", revenue: 380000 },
    { month: "Jun", revenue: 510000 },
  ];

  const registrationData = [
    { name: "Players", value: 120, color: "#06b6d4" },
    { name: "Teams", value: 8, color: "#3b82f6" },
    { name: "Coaches", value: 15, color: "#10b981" },
    { name: "Umpires", value: 6, color: "#f59e0b" },
  ];

  const matchData = [
    { day: "Day 1", attendance: 45000 },
    { day: "Day 2", attendance: 52000 },
    { day: "Day 3", attendance: 48000 },
    { day: "Day 4", attendance: 55000 },
    { day: "Day 5", attendance: 49000 },
    { day: "Day 6", attendance: 58000 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-8"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
          Admin Dashboard
        </h1>
        <p className="text-xl text-gray-300">CPL 2026 Management Overview</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <h3 className="text-xl font-semibold text-white mb-4">
            Revenue Growth
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#06b6d4"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <h3 className="text-xl font-semibold text-white mb-4">
            Registration Breakdown
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={registrationData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {registrationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">
          Match Attendance Trends
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={matchData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="day" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #374151",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="attendance" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-2 border-b border-slate-700">
            <div>
              <p className="text-white font-medium">New team registered</p>
              <p className="text-slate-400 text-sm">
                Punjab Panthers joined CPL
              </p>
            </div>
            <span className="text-slate-400 text-sm">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-slate-700">
            <div>
              <p className="text-white font-medium">Match completed</p>
              <p className="text-slate-400 text-sm">
                Hyderabad Warriors vs Bangalore Titans
              </p>
            </div>
            <span className="text-slate-400 text-sm">5 hours ago</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-slate-700">
            <div>
              <p className="text-white font-medium">Player auction</p>
              <p className="text-slate-400 text-sm">
                120 players registered for auction
              </p>
            </div>
            <span className="text-slate-400 text-sm">1 day ago</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
