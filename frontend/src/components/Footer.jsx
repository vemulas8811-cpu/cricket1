import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Cricket Premier League
            </h3>
            <p className="text-slate-400 mb-4">
              The ultimate cricketing spectacle bringing together the world's
              best talent.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/teams"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Teams
                </a>
              </li>
              <li>
                <a
                  href="/players"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Players
                </a>
              </li>
              <li>
                <a
                  href="/live-matches"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Live Matches
                </a>
              </li>
              <li>
                <a
                  href="/points-table"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Points Table
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              League Info
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about-league"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  About CPL
                </a>
              </li>
              <li>
                <a
                  href="/tournament-schedule"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="/stadiums"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Stadiums
                </a>
              </li>
              <li>
                <a
                  href="/sponsors"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Sponsors
                </a>
              </li>
              <li>
                <a
                  href="/awards"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Awards
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center text-slate-400">
                <Mail size={16} className="mr-2" />
                <span>info@cpl2026.com</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Phone size={16} className="mr-2" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-slate-400">
                <MapPin size={16} className="mr-2" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0">
              © {currentYear} Cricket Premier League. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="/privacy"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/faq"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-2">
              Download Our App
            </h4>
            <p className="text-slate-400 mb-4">
              Get the full CPL experience on mobile
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">
                App Store
              </button>
              <button className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
