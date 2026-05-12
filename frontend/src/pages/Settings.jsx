import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Settings as SettingsIcon,
  Bell,
  Shield,
  User,
  Palette,
  Globe,
  Volume2,
  Eye,
} from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General", icon: SettingsIcon },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "privacy", label: "Privacy", icon: Shield },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "account", label: "Account", icon: User },
  ];

  const generalSettings = [
    {
      title: "Language",
      description: "Choose your preferred language",
      type: "select",
      options: ["English", "Hindi", "Tamil", "Telugu", "Bengali"],
      value: "English",
    },
    {
      title: "Timezone",
      description: "Set your local timezone",
      type: "select",
      options: ["IST (UTC+5:30)", "EST (UTC-5)", "PST (UTC-8)", "GMT (UTC+0)"],
      value: "IST (UTC+5:30)",
    },
    {
      title: "Date Format",
      description: "Choose how dates are displayed",
      type: "select",
      options: ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD"],
      value: "DD/MM/YYYY",
    },
  ];

  const notificationSettings = [
    {
      title: "Match Notifications",
      description: "Get notified about match starts and results",
      type: "toggle",
      value: true,
    },
    {
      title: "News Alerts",
      description: "Breaking news and important announcements",
      type: "toggle",
      value: true,
    },
    {
      title: "Fantasy Updates",
      description: "Points updates and league changes",
      type: "toggle",
      value: false,
    },
    {
      title: "Email Notifications",
      description: "Receive updates via email",
      type: "toggle",
      value: true,
    },
    {
      title: "Push Notifications",
      description: "Receive push notifications on mobile",
      type: "toggle",
      value: true,
    },
  ];

  const privacySettings = [
    {
      title: "Profile Visibility",
      description: "Control who can see your profile",
      type: "select",
      options: ["Public", "Friends Only", "Private"],
      value: "Public",
    },
    {
      title: "Activity Status",
      description: "Show when you're online",
      type: "toggle",
      value: true,
    },
    {
      title: "Data Sharing",
      description: "Share usage data to improve our services",
      type: "toggle",
      value: false,
    },
    {
      title: "Personalized Ads",
      description: "Allow personalized advertisements",
      type: "toggle",
      value: true,
    },
  ];

  const appearanceSettings = [
    {
      title: "Theme",
      description: "Choose your preferred theme",
      type: "select",
      options: ["Dark", "Light", "Auto"],
      value: "Dark",
    },
    {
      title: "Font Size",
      description: "Adjust text size for better readability",
      type: "select",
      options: ["Small", "Medium", "Large"],
      value: "Medium",
    },
    {
      title: "Animations",
      description: "Enable smooth animations and transitions",
      type: "toggle",
      value: true,
    },
    {
      title: "High Contrast",
      description: "Increase contrast for better visibility",
      type: "toggle",
      value: false,
    },
  ];

  const accountSettings = [
    {
      title: "Email Address",
      description: "Update your email address",
      type: "input",
      value: "user@example.com",
    },
    {
      title: "Phone Number",
      description: "Update your phone number",
      type: "input",
      value: "+91 98765 43210",
    },
    {
      title: "Password",
      description: "Change your password",
      type: "password",
      value: "••••••••",
    },
    {
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security",
      type: "toggle",
      value: false,
    },
  ];

  const getCurrentSettings = () => {
    switch (activeTab) {
      case "general":
        return generalSettings;
      case "notifications":
        return notificationSettings;
      case "privacy":
        return privacySettings;
      case "appearance":
        return appearanceSettings;
      case "account":
        return accountSettings;
      default:
        return generalSettings;
    }
  };

  const renderSetting = (setting, index) => {
    return (
      <motion.div
        key={setting.title}
        className="bg-slate-800/50 rounded-lg p-6 border border-slate-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-white font-semibold mb-1">{setting.title}</h3>
            <p className="text-slate-400 text-sm mb-4">{setting.description}</p>

            {setting.type === "toggle" && (
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked={setting.value}
                />
                <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
              </label>
            )}

            {setting.type === "select" && (
              <select
                className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                defaultValue={setting.value}
              >
                {setting.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}

            {setting.type === "input" && (
              <input
                type="text"
                className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400 w-full max-w-xs"
                defaultValue={setting.value}
              />
            )}

            {setting.type === "password" && (
              <input
                type="password"
                className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400 w-full max-w-xs"
                defaultValue={setting.value}
              />
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Settings
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Customize your CPL experience with personalized preferences and
            controls
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                          : "text-slate-400 hover:text-white hover:bg-slate-700"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {tab.label}
                    </motion.button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {getCurrentSettings().map((setting, index) =>
                renderSetting(setting, index),
              )}
            </div>

            {/* Save Button */}
            <motion.div
              className="mt-8 flex justify-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Save Changes
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Account Actions */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-8 border border-red-400/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Account Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-slate-800/50 rounded-lg p-6 text-center border border-slate-700"
              whileHover={{ scale: 1.05 }}
            >
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Download Data</h3>
              <p className="text-slate-400 text-sm mb-4">
                Get a copy of all your data
              </p>
              <button className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors">
                Request Data
              </button>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 rounded-lg p-6 text-center border border-slate-700"
              whileHover={{ scale: 1.05 }}
            >
              <User className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">
                Deactivate Account
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Temporarily disable your account
              </p>
              <button className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors">
                Deactivate
              </button>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 rounded-lg p-6 text-center border border-red-400/20"
              whileHover={{ scale: 1.05 }}
            >
              <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Delete Account</h3>
              <p className="text-slate-400 text-sm mb-4">
                Permanently delete your account
              </p>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Delete Account
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Settings;
