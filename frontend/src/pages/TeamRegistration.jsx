import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Upload, User, Mail, Phone, MapPin } from "lucide-react";

const TeamRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    teamName: "",
    captainName: "",
    email: "",
    phone: "",
    city: "",
    logo: null,
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, logo: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const steps = [
    { number: 1, title: "Team Details" },
    { number: 2, title: "Contact Info" },
    { number: 3, title: "Documents" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen overflow-y-auto py-20"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Team Registration
          </h1>
          <p className="text-xl text-gray-300">
            Register your team for CPL 2026
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          {steps.map((s, index) => (
            <div key={s.number} className="flex items-center">
              <motion.div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= s.number
                    ? "bg-cyan-500 text-white"
                    : "bg-slate-700 text-slate-400"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {step > s.number ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  s.number
                )}
              </motion.div>
              <span
                className={`ml-2 ${step >= s.number ? "text-cyan-400" : "text-slate-400"}`}
              >
                {s.title}
              </span>
              {index < steps.length - 1 && (
                <div
                  className={`w-12 h-0.5 mx-4 ${step > s.number ? "bg-cyan-500" : "bg-slate-700"}`}
                ></div>
              )}
            </div>
          ))}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Team Name
                </label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  placeholder="Enter team name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Captain Name
                </label>
                <input
                  type="text"
                  name="captainName"
                  value={formData.captainName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  placeholder="Enter captain name"
                  required
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  placeholder="Enter city"
                  required
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Team Logo
                </label>
                <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-400 mb-2">Upload team logo</p>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                    id="logo-upload"
                  />
                  <label
                    htmlFor="logo-upload"
                    className="cursor-pointer bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors"
                  >
                    Choose File
                  </label>
                  {formData.logo && (
                    <p className="text-cyan-400 mt-2">{formData.logo.name}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 border border-slate-600 text-slate-300 rounded-lg hover:border-slate-500 transition-colors"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors ml-auto"
              >
                Submit Registration
              </button>
            )}
          </div>
        </motion.form>

        {/* Success Modal */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              className="mx-auto mt-8 max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-slate-700 bg-slate-800 p-8 text-center"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Registration Successful!
              </h3>
              <p className="text-slate-300 mb-4">
                Welcome to CPL 2026! Our team will contact you shortly.
              </p>
              <p className="text-cyan-400 font-semibold">
                Application ID: CPL-TEAM-2026-001
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TeamRegistration;
