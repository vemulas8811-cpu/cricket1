import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Calendar,
  Trophy,
  Users,
  MessageSquare,
  Settings,
  CheckCircle,
  X,
} from "lucide-react";

const NotificationsCenter = () => {
  const [activeTab, setActiveTab] = useState("all");

  const notifications = [
    {
      id: 1,
      type: "match",
      title: "Match Starting Soon",
      message: "MI vs CSK match begins in 30 minutes at Wankhede Stadium",
      time: "2 hours ago",
      read: false,
      icon: Calendar,
      color: "text-blue-400",
    },
    {
      id: 2,
      type: "result",
      title: "Match Result",
      message: "RCB defeated PBKS by 45 runs. Virat Kohli scored 89*",
      time: "4 hours ago",
      read: false,
      icon: Trophy,
      color: "text-green-400",
    },
    {
      id: 3,
      type: "fantasy",
      title: "Fantasy Points Updated",
      message: "Your team scored 245 points in yesterday's match",
      time: "6 hours ago",
      read: true,
      icon: Users,
      color: "text-purple-400",
    },
    {
      id: 4,
      type: "news",
      title: "Breaking News",
      message: "CPL announces new partnership with global sports brand",
      time: "1 day ago",
      read: true,
      icon: MessageSquare,
      color: "text-cyan-400",
    },
    {
      id: 5,
      type: "reminder",
      title: "Ticket Reminder",
      message:
        "Your tickets for DC vs SRH are confirmed. Don't forget to arrive early!",
      time: "2 days ago",
      read: true,
      icon: Bell,
      color: "text-yellow-400",
    },
  ];

  const tabs = [
    { id: "all", label: "All", count: notifications.length },
    {
      id: "unread",
      label: "Unread",
      count: notifications.filter((n) => !n.read).length,
    },
    {
      id: "matches",
      label: "Matches",
      count: notifications.filter(
        (n) => n.type === "match" || n.type === "result",
      ).length,
    },
    {
      id: "news",
      label: "News",
      count: notifications.filter((n) => n.type === "news").length,
    },
  ];

  const filteredNotifications =
    activeTab === "all"
      ? notifications
      : activeTab === "unread"
        ? notifications.filter((n) => !n.read)
        : notifications.filter((n) => {
            if (activeTab === "matches")
              return n.type === "match" || n.type === "result";
            if (activeTab === "news") return n.type === "news";
            return true;
          });

  const markAsRead = (id) => {
    // In a real app, this would update the backend
    console.log("Mark as read:", id);
  };

  const markAllAsRead = () => {
    // In a real app, this would update the backend
    console.log("Mark all as read");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Notifications
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest CPL news, match alerts, and
            personalized notifications
          </p>
        </div>

        {/* Header Actions */}
        <div className="flex justify-between items-center mb-8">
          <motion.button
            onClick={markAllAsRead}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Mark All as Read
          </motion.button>

          <motion.button
            className="bg-slate-700 text-white p-3 rounded-xl hover:bg-slate-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Settings className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 border border-slate-700">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
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
                  {tab.label}
                  <span className="ml-2 bg-slate-600 text-xs px-2 py-1 rounded-full">
                    {tab.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.map((notification, index) => {
            const Icon = notification.icon;
            return (
              <motion.div
                key={notification.id}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                  notification.read
                    ? "border-slate-700 opacity-75"
                    : "border-cyan-400/50 bg-cyan-500/5"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-full ${notification.read ? "bg-slate-700" : "bg-cyan-500/20"}`}
                    >
                      <Icon
                        className={`w-6 h-6 ${notification.read ? "text-slate-400" : notification.color}`}
                      />
                    </div>

                    <div className="flex-1">
                      <h3
                        className={`text-lg font-semibold mb-1 ${
                          notification.read ? "text-slate-400" : "text-white"
                        }`}
                      >
                        {notification.title}
                      </h3>
                      <p
                        className={`text-sm mb-2 ${
                          notification.read
                            ? "text-slate-500"
                            : "text-slate-300"
                        }`}
                      >
                        {notification.message}
                      </p>
                      <span className="text-xs text-slate-400">
                        {notification.time}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {!notification.read && (
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    )}
                    <motion.button
                      onClick={() => markAsRead(notification.id)}
                      className="p-2 text-slate-400 hover:text-cyan-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {notification.read ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <X className="w-5 h-5" />
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredNotifications.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Bell className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              No notifications
            </h3>
            <p className="text-slate-400">You're all caught up!</p>
          </motion.div>
        )}

        {/* Notification Settings */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Customize Your Notifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Match Alerts",
                description:
                  "Get notified about match starts and important updates",
              },
              {
                title: "Results",
                description: "Instant notifications when matches end",
              },
              {
                title: "News & Updates",
                description: "Breaking news and CPL announcements",
              },
              {
                title: "Fantasy Updates",
                description: "Points updates and league changes",
              },
            ].map((setting, index) => (
              <div
                key={setting.title}
                className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg"
              >
                <div>
                  <h3 className="text-white font-semibold">{setting.title}</h3>
                  <p className="text-slate-400 text-sm">
                    {setting.description}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                </label>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotificationsCenter;
