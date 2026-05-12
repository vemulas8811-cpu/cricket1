import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Heart,
  Calendar,
  CheckCircle,
  MapPin,
  Clock,
} from "lucide-react";

const VolunteerRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
      occupation: "",
      emergencyContact: "",
      emergencyPhone: "",
    },
    volunteerInfo: {
      interests: [],
      availability: [],
      experience: "",
      skills: [],
      languages: [],
      motivation: "",
    },
    preferences: {
      preferredRoles: [],
      locationPreference: "",
      timeCommitment: "",
      specialRequirements: "",
    },
  });

  const steps = [
    { id: 1, title: "Personal Information", icon: Users },
    { id: 2, title: "Volunteer Interests", icon: Heart },
    { id: 3, title: "Preferences", icon: Calendar },
  ];

  const volunteerInterests = [
    "Match Day Support",
    "Event Management",
    "Fan Engagement",
    "Medical Support",
    "Media & Communications",
    "Logistics & Transportation",
    "Hospitality",
    "Youth Programs",
    "Community Outreach",
    "Sustainability Initiatives",
  ];

  const availabilityOptions = [
    "Weekdays (Morning)",
    "Weekdays (Evening)",
    "Weekends (Morning)",
    "Weekends (Evening)",
    "Match Days Only",
    "Flexible Schedule",
    "Full Tournament Period",
  ];

  const skills = [
    "First Aid",
    "Event Planning",
    "Public Speaking",
    "Photography",
    "Social Media",
    "Translation",
    "Driving",
    "Technical Support",
    "Crowd Management",
    "Data Entry",
  ];

  const languages = [
    "English",
    "Hindi",
    "Bengali",
    "Tamil",
    "Telugu",
    "Marathi",
    "Gujarati",
    "Kannada",
    "Malayalam",
    "Punjabi",
  ];

  const preferredRoles = [
    "Usher/Guide",
    "Information Desk",
    "Medical Assistant",
    "Media Volunteer",
    "Hospitality Helper",
    "Transportation Coordinator",
    "Event Support",
    "Community Liaison",
    "Sustainability Officer",
    "Youth Mentor",
  ];

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleArrayToggle = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: prev[section][field].includes(value)
          ? prev[section][field].filter((item) => item !== value)
          : [...prev[section][field], value],
      },
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Submitting volunteer registration:", formData);
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
            Volunteer Registration
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join our volunteer community and be part of creating unforgettable
            cricket experiences
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={step.id}>
                  <motion.div
                    className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                      currentStep >= step.id
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-400 text-white"
                        : "border-slate-600 text-slate-400"
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 h-1 rounded ${
                        currentStep > step.id ? "bg-cyan-400" : "bg-slate-600"
                      }`}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8"
        >
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.personalInfo.firstName}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "firstName",
                        e.target.value,
                      )
                    }
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.personalInfo.lastName}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "lastName",
                        e.target.value,
                      )
                    }
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.personalInfo.email}
                    onChange={(e) =>
                      handleInputChange("personalInfo", "email", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.personalInfo.phone}
                    onChange={(e) =>
                      handleInputChange("personalInfo", "phone", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.personalInfo.dateOfBirth}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "dateOfBirth",
                        e.target.value,
                      )
                    }
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">Gender *</label>
                  <select
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.personalInfo.gender}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "gender",
                        e.target.value,
                      )
                    }
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">
                    Occupation
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.personalInfo.occupation}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "occupation",
                        e.target.value,
                      )
                    }
                    placeholder="e.g., Student, Professional, etc."
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">
                    Emergency Contact Name *
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.personalInfo.emergencyContact}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "emergencyContact",
                        e.target.value,
                      )
                    }
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-slate-300 mb-2">
                    Emergency Contact Phone *
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.personalInfo.emergencyPhone}
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "emergencyPhone",
                        e.target.value,
                      )
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Volunteer Interests & Skills
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-slate-300 mb-2">
                    Areas of Interest *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {volunteerInterests.map((interest) => (
                      <label
                        key={interest}
                        className="flex items-center space-x-3"
                      >
                        <input
                          type="checkbox"
                          checked={formData.volunteerInfo.interests.includes(
                            interest,
                          )}
                          onChange={() =>
                            handleArrayToggle(
                              "volunteerInfo",
                              "interests",
                              interest,
                            )
                          }
                          className="w-4 h-4 text-cyan-600 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                        />
                        <span className="text-slate-300 text-sm">
                          {interest}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Availability *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {availabilityOptions.map((option) => (
                      <label
                        key={option}
                        className="flex items-center space-x-3"
                      >
                        <input
                          type="checkbox"
                          checked={formData.volunteerInfo.availability.includes(
                            option,
                          )}
                          onChange={() =>
                            handleArrayToggle(
                              "volunteerInfo",
                              "availability",
                              option,
                            )
                          }
                          className="w-4 h-4 text-cyan-600 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                        />
                        <span className="text-slate-300 text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Skills & Experience
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {skills.map((skill) => (
                      <label
                        key={skill}
                        className="flex items-center space-x-3"
                      >
                        <input
                          type="checkbox"
                          checked={formData.volunteerInfo.skills.includes(
                            skill,
                          )}
                          onChange={() =>
                            handleArrayToggle("volunteerInfo", "skills", skill)
                          }
                          className="w-4 h-4 text-cyan-600 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                        />
                        <span className="text-slate-300 text-sm">{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Languages Spoken
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {languages.map((language) => (
                      <label
                        key={language}
                        className="flex items-center space-x-3"
                      >
                        <input
                          type="checkbox"
                          checked={formData.volunteerInfo.languages.includes(
                            language,
                          )}
                          onChange={() =>
                            handleArrayToggle(
                              "volunteerInfo",
                              "languages",
                              language,
                            )
                          }
                          className="w-4 h-4 text-cyan-600 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                        />
                        <span className="text-slate-300 text-sm">
                          {language}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Previous Volunteer Experience
                  </label>
                  <textarea
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 h-24"
                    value={formData.volunteerInfo.experience}
                    onChange={(e) =>
                      handleInputChange(
                        "volunteerInfo",
                        "experience",
                        e.target.value,
                      )
                    }
                    placeholder="Tell us about your previous volunteer work, especially in sports or large events"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Why do you want to volunteer with CPL? *
                  </label>
                  <textarea
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 h-24"
                    value={formData.volunteerInfo.motivation}
                    onChange={(e) =>
                      handleInputChange(
                        "volunteerInfo",
                        "motivation",
                        e.target.value,
                      )
                    }
                    placeholder="Share your motivation and what you hope to gain from volunteering"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Preferences & Requirements
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-slate-300 mb-2">
                    Preferred Roles
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {preferredRoles.map((role) => (
                      <label key={role} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.preferences.preferredRoles.includes(
                            role,
                          )}
                          onChange={() =>
                            handleArrayToggle(
                              "preferences",
                              "preferredRoles",
                              role,
                            )
                          }
                          className="w-4 h-4 text-cyan-600 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                        />
                        <span className="text-slate-300 text-sm">{role}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 mb-2">
                      Location Preference
                    </label>
                    <select
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                      value={formData.preferences.locationPreference}
                      onChange={(e) =>
                        handleInputChange(
                          "preferences",
                          "locationPreference",
                          e.target.value,
                        )
                      }
                    >
                      <option value="">Select Location</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="delhi">Delhi</option>
                      <option value="bangalore">Bangalore</option>
                      <option value="chennai">Chennai</option>
                      <option value="kolkata">Kolkata</option>
                      <option value="hyderabad">Hyderabad</option>
                      <option value="pune">Pune</option>
                      <option value="ahmedabad">Ahmedabad</option>
                      <option value="any">Any Location</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2">
                      Time Commitment
                    </label>
                    <select
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                      value={formData.preferences.timeCommitment}
                      onChange={(e) =>
                        handleInputChange(
                          "preferences",
                          "timeCommitment",
                          e.target.value,
                        )
                      }
                    >
                      <option value="">Select Commitment</option>
                      <option value="few-hours">Few hours per week</option>
                      <option value="part-time">
                        Part-time (10-20 hours/week)
                      </option>
                      <option value="full-tournament">
                        Full tournament period
                      </option>
                      <option value="flexible">
                        Flexible based on availability
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Special Requirements or Accommodations
                  </label>
                  <textarea
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 h-24"
                    value={formData.preferences.specialRequirements}
                    onChange={(e) =>
                      handleInputChange(
                        "preferences",
                        "specialRequirements",
                        e.target.value,
                      )
                    }
                    placeholder="Any special requirements, accessibility needs, or accommodations we should be aware of"
                  />
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <motion.button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              currentStep === 1
                ? "bg-slate-700 text-slate-500 cursor-not-allowed"
                : "bg-slate-700 text-white hover:bg-slate-600"
            }`}
            whileHover={currentStep > 1 ? { scale: 1.05 } : {}}
            whileTap={currentStep > 1 ? { scale: 0.95 } : {}}
          >
            Previous
          </motion.button>

          {currentStep < steps.length ? (
            <motion.button
              onClick={nextStep}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next
            </motion.button>
          ) : (
            <motion.button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Application
            </motion.button>
          )}
        </div>

        {/* Volunteer Benefits */}
        <motion.div
          className="mt-12 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">
            Volunteer Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="text-white font-semibold">
                  Free Match Tickets
                </div>
                <div className="text-slate-400 text-sm">
                  Complimentary access to matches
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="text-white font-semibold">
                  Official Merchandise
                </div>
                <div className="text-slate-400 text-sm">
                  Exclusive volunteer gear
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Networking</div>
                <div className="text-slate-400 text-sm">
                  Connect with cricket professionals
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Certificate</div>
                <div className="text-slate-400 text-sm">
                  Official volunteer certificate
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Training</div>
                <div className="text-slate-400 text-sm">
                  Volunteer orientation and training
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Meals</div>
                <div className="text-slate-400 text-sm">
                  Complimentary meals during shifts
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Recognition</div>
                <div className="text-slate-400 text-sm">
                  Public acknowledgment of contributions
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Priority Booking</div>
                <div className="text-slate-400 text-sm">
                  Early access to future events
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-400/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Ready to Make a Difference?
          </h3>
          <p className="text-slate-300 mb-4">
            Join thousands of passionate volunteers who help create
            unforgettable cricket experiences
          </p>
          <div className="text-sm text-slate-400">
            Applications are reviewed within 7-10 business days. Selected
            volunteers will be contacted for orientation.
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VolunteerRegistration;
