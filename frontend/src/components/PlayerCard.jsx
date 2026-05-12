import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Card from "./Card.jsx";

const PlayerCard = ({ player = {} }) => {
  const playerName = player.name || "Player";
  const playerRole =
    player.role || player.playerType?.replace(/_/g, " ") || "Unknown Role";
  const team = player.team || "Unassigned";
  const runs = player.runs ?? 0;
  const wickets = player.wickets ?? 0;

  // Get player initials
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const initials = getInitials(playerName);

  // Gradient colors based on role
  const getGradient = (role) => {
    const roleType = role.toLowerCase();
    if (roleType.includes("batsman")) return "from-amber-500 to-orange-600";
    if (roleType.includes("bowler")) return "from-green-500 to-emerald-600";
    if (roleType.includes("all-rounder")) return "from-purple-500 to-pink-600";
    return "from-cyan-500 to-blue-600";
  };

  const gradientClass = getGradient(playerRole);

  return (
    <Card>
      <motion.div
        className="flex flex-col items-center text-center h-full"
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Initials Badge */}
        <motion.div
          className={`relative w-28 h-28 rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center mb-6 shadow-lg overflow-hidden`}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {/* Animated glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Inner circle for depth */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <span className="text-5xl font-black text-white">{initials}</span>
          </div>

          {/* Decorative border */}
          <div className="absolute inset-0 rounded-full border-2 border-white/30"></div>
        </motion.div>

        {/* Player Info */}
        <h3 className="text-2xl font-bold text-white capitalize mb-1">
          {playerName}
        </h3>

        {/* Role Badge */}
        <div className="inline-flex items-center gap-2 mb-3">
          <div
            className={`px-3 py-1 rounded-full bg-gradient-to-r ${gradientClass} text-white text-xs font-semibold`}
          >
            {playerRole}
          </div>
        </div>

        {/* Team */}
        <p className="text-sm text-slate-300 font-medium mb-4">{team}</p>

        {/* Stats Section */}
        <div className="mt-6 w-full pt-6 border-t border-slate-700/50">
          <div className="grid grid-cols-3 gap-3 mb-4">
            <motion.div
              className="bg-slate-700/30 rounded-lg p-3 hover:bg-slate-700/50 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-xl font-bold text-amber-400">{runs}</p>
              <p className="text-xs text-slate-400 mt-1">Runs</p>
            </motion.div>

            <motion.div
              className="bg-slate-700/30 rounded-lg p-3 hover:bg-slate-700/50 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-xl font-bold text-green-400">{wickets}</p>
              <p className="text-xs text-slate-400 mt-1">Wickets</p>
            </motion.div>

            <motion.div
              className="bg-slate-700/30 rounded-lg p-3 hover:bg-slate-700/50 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-xl font-bold text-cyan-400">
                {Math.round((runs + wickets) / 2) || 0}
              </p>
              <p className="text-xs text-slate-400 mt-1">Avg</p>
            </motion.div>
          </div>
        </div>

        {/* Performance Indicator */}
        <div className="mt-4 w-full flex items-center justify-center gap-2 text-xs text-slate-400">
          <Zap className="w-3 h-3 text-amber-400" />
          <span>Peak Performance Player</span>
        </div>
      </motion.div>
    </Card>
  );
};

export default PlayerCard;
