import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext.jsx";

const DropdownMenu = ({ label, items, isActive }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="group relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition-all duration-200 hover:bg-slate-800/50 hover:text-cyan-400"
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 mt-2 w-48 rounded-2xl border border-slate-700/50 bg-slate-900/95 shadow-2xl shadow-black/50 backdrop-blur-md"
          >
            {items.map((item) => (
              <Link
                key={item.label}
                to={item.link || "#"}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 text-sm transition-all first:rounded-t-2xl last:rounded-b-2xl hover:bg-slate-800/80 hover:text-cyan-400 ${
                  isActive(item.link)
                    ? "bg-slate-800/80 text-cyan-300"
                    : "text-slate-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, openRegisterModal, openLoginModal, logout } = useAuth();

  const leagueItems = [
    { label: "About CPL", link: "/about-league" },
    { label: "Tournament Format", link: "/tournament-schedule" },
    { label: "Teams", link: "/teams" },
    { label: "Stadiums", link: "/stadiums" },
    { label: "Sponsors", link: "/sponsors" },
  ];

  const updatesItems = [
    { label: "Live Scores", link: "/live-matches" },
    { label: "News", link: "/news-updates" },
    { label: "Match Results", link: "/match-highlights" },
    { label: "Transfers", link: "/player-auction" },
    { label: "Auctions", link: "/player-auction" },
  ];

  const rulesItems = [
    { label: "Player Rules", link: "/faq" },
    { label: "Match Rules", link: "/faq" },
    { label: "Fair Play", link: "/faq" },
    { label: "Eligibility", link: "/faq" },
    { label: "Conduct", link: "/faq" },
  ];

  const mediaItems = [
    { label: "Gallery", link: "/gallery" },
    { label: "Videos", link: "/media-center" },
    { label: "Interviews", link: "/media-center" },
    { label: "Highlights", link: "/match-highlights" },
    { label: "Fan Reels", link: "/fan-zone" },
  ];

  const moreItems = [
    { label: "Careers", link: "/careers" },
    { label: "Contact", link: "/contact" },
    { label: "FAQ", link: "/faq" },
    { label: "Fan Zone", link: "/fan-zone" },
    { label: "Merchandise", link: "/merchandise" },
  ];

  const isActive = (link) => location.pathname === link;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 shadow-lg shadow-slate-950/20 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-2 shadow-lg shadow-cyan-500/30"
            >
              <span className="font-bold text-white">CPL</span>
            </motion.div>
            <span className="hidden font-bold text-white sm:inline">
              Cricket Premier League
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            <Link
              to="/"
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                isActive("/")
                  ? "bg-slate-800/70 text-cyan-300"
                  : "text-slate-200 hover:bg-slate-800/50 hover:text-cyan-400"
              }`}
            >
              Home
            </Link>
            <DropdownMenu
              label="League Info"
              items={leagueItems}
              isActive={isActive}
            />
            <DropdownMenu
              label="Updates"
              items={updatesItems}
              isActive={isActive}
            />
            <DropdownMenu
              label="Rules"
              items={rulesItems}
              isActive={isActive}
            />
            <DropdownMenu
              label="Media"
              items={mediaItems}
              isActive={isActive}
            />
            <DropdownMenu label="More" items={moreItems} isActive={isActive} />
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <>
                <Link
                  to="/player-dashboard"
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  Dashboard
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={logout}
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-cyan-500 hover:text-cyan-400"
                >
                  Logout
                </motion.button>
              </>
            ) : (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openRegisterModal}
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  Register
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openLoginModal}
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-cyan-500 hover:text-cyan-400"
                >
                  Login
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openRegisterModal}
                  className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  Join Now
                </motion.button>
              </>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-lg p-2 text-slate-200 hover:bg-slate-800/50"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 rounded-2xl border border-slate-700/50 bg-slate-900/95 backdrop-blur-md"
            >
              <div className="flex flex-col p-4 space-y-2">
                <Link
                  to="/"
                  className="rounded-lg px-3 py-2 text-slate-200 hover:bg-slate-800/50 hover:text-cyan-400"
                >
                  Home
                </Link>
                {leagueItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.link}
                    className="rounded-lg px-3 py-2 text-slate-200 hover:bg-slate-800/50 hover:text-cyan-400"
                  >
                    {item.label}
                  </Link>
                ))}
                {updatesItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.link}
                    className="rounded-lg px-3 py-2 text-slate-200 hover:bg-slate-800/50 hover:text-cyan-400"
                  >
                    {item.label}
                  </Link>
                ))}
                {rulesItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.link}
                    className="rounded-lg px-3 py-2 text-slate-200 hover:bg-slate-800/50 hover:text-cyan-400"
                  >
                    {item.label}
                  </Link>
                ))}
                {mediaItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.link}
                    className="rounded-lg px-3 py-2 text-slate-200 hover:bg-slate-800/50 hover:text-cyan-400"
                  >
                    {item.label}
                  </Link>
                ))}
                {moreItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.link}
                    className="rounded-lg px-3 py-2 text-slate-200 hover:bg-slate-800/50 hover:text-cyan-400"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
