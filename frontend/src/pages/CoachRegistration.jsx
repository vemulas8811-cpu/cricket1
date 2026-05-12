import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Award,
  Calendar,
  CheckCircle,
} from "lucide-react";

const CoachRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
    },
    professionalInfo: {
      experience: "",
      specialization: "",
      certifications: [],
      previousTeams: "",
      achievements: "",
    },
    documents: {
      resume: null,
      certificates: null,
      photo: null,
      idProof: null,
    },
  });

  const steps = [
    { id: 1, title: "Personal Information", icon: User },
    { id: 2, title: "Professional Details", icon: Award },
    { id: 3, title: "Documents Upload", icon: CheckCircle },
  ];

  const specializations = [
    "Batting Coach",
    "Bowling Coach",
    "Fielding Coach",
    "Wicket-keeping Coach",
    "Fitness Trainer",
    "Mental Conditioning Coach",
    "Youth Development Coach",
    "Head Coach",
  ];

  const certifications = [
    "Level 1 Coaching Certification",
    "Level 2 Coaching Certification",
    "Level 3 Coaching Certification",
    "ECB Coaching License",
    "BCCI Coaching License",
    "Cricket Australia Coaching Certificate",
    "Fitness Training Certification",
    "Sports Psychology Certification",
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

  const handleCertificationToggle = (cert) => {
    setFormData((prev) => ({
      ...prev,
      professionalInfo: {
        ...prev.professionalInfo,
        certifications: prev.professionalInfo.certifications.includes(cert)
          ? prev.professionalInfo.certifications.filter((c) => c !== cert)
          : [...prev.professionalInfo.certifications, cert],
      },
    }));
  };

  const handleFileUpload = (field, file) => {
    setFormData((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [field]: file,
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
    console.log("Submitting coach registration:", formData);
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
            Coach Registration
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join CPL as a certified coach and shape the future of cricket
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
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Professional Details
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-slate-300 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.professionalInfo.experience}
                    onChange={(e) =>
                      handleInputChange(
                        "professionalInfo",
                        "experience",
                        e.target.value,
                      )
                    }
                  >
                    <option value="">Select Experience</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Specialization *
                  </label>
                  <select
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.professionalInfo.specialization}
                    onChange={(e) =>
                      handleInputChange(
                        "professionalInfo",
                        "specialization",
                        e.target.value,
                      )
                    }
                  >
                    <option value="">Select Specialization</option>
                    {specializations.map((spec) => (
                      <option key={spec} value={spec}>
                        {spec}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Certifications
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {certifications.map((cert) => (
                      <label key={cert} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.professionalInfo.certifications.includes(
                            cert,
                          )}
                          onChange={() => handleCertificationToggle(cert)}
                          className="w-4 h-4 text-cyan-600 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                        />
                        <span className="text-slate-300 text-sm">{cert}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Previous Teams/Coaching Experience
                  </label>
                  <textarea
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 h-24"
                    placeholder="List your previous coaching experience, teams worked with, etc."
                    value={formData.professionalInfo.previousTeams}
                    onChange={(e) =>
                      handleInputChange(
                        "professionalInfo",
                        "previousTeams",
                        e.target.value,
                      )
                    }
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Major Achievements
                  </label>
                  <textarea
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 h-24"
                    placeholder="List your major achievements, awards, successful players coached, etc."
                    value={formData.professionalInfo.achievements}
                    onChange={(e) =>
                      handleInputChange(
                        "professionalInfo",
                        "achievements",
                        e.target.value,
                      )
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Document Upload
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-slate-300 mb-2">
                    Resume/CV *
                  </label>
                  <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) =>
                        handleFileUpload("resume", e.target.files[0])
                      }
                      className="hidden"
                      id="resume"
                    />
                    <label htmlFor="resume" className="cursor-pointer">
                      <div className="text-slate-400 mb-2">
                        Click to upload or drag and drop
                      </div>
                      <div className="text-cyan-400">
                        PDF, DOC, DOCX (Max 5MB)
                      </div>
                    </label>
                  </div>
                  {formData.documents.resume && (
                    <div className="mt-2 text-green-400 text-sm">
                      ✓ {formData.documents.resume.name}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Coaching Certificates
                  </label>
                  <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      multiple
                      onChange={(e) =>
                        handleFileUpload("certificates", e.target.files)
                      }
                      className="hidden"
                      id="certificates"
                    />
                    <label htmlFor="certificates" className="cursor-pointer">
                      <div className="text-slate-400 mb-2">
                        Click to upload certificates
                      </div>
                      <div className="text-cyan-400">
                        PDF, JPG, PNG (Max 10MB total)
                      </div>
                    </label>
                  </div>
                  {formData.documents.certificates && (
                    <div className="mt-2 text-green-400 text-sm">
                      ✓ {formData.documents.certificates.length} files uploaded
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Professional Photo *
                  </label>
                  <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      onChange={(e) =>
                        handleFileUpload("photo", e.target.files[0])
                      }
                      className="hidden"
                      id="photo"
                    />
                    <label htmlFor="photo" className="cursor-pointer">
                      <div className="text-slate-400 mb-2">
                        Click to upload photo
                      </div>
                      <div className="text-cyan-400">JPG, PNG (Max 2MB)</div>
                    </label>
                  </div>
                  {formData.documents.photo && (
                    <div className="mt-2 text-green-400 text-sm">
                      ✓ {formData.documents.photo.name}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    ID Proof *
                  </label>
                  <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) =>
                        handleFileUpload("idProof", e.target.files[0])
                      }
                      className="hidden"
                      id="idProof"
                    />
                    <label htmlFor="idProof" className="cursor-pointer">
                      <div className="text-slate-400 mb-2">
                        Click to upload ID proof
                      </div>
                      <div className="text-cyan-400">
                        Aadhaar, Passport, Driving License
                      </div>
                    </label>
                  </div>
                  {formData.documents.idProof && (
                    <div className="mt-2 text-green-400 text-sm">
                      ✓ {formData.documents.idProof.name}
                    </div>
                  )}
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

        {/* Requirements */}
        <motion.div
          className="mt-12 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">
            Coach Registration Requirements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Minimum Age</div>
                <div className="text-slate-400 text-sm">21 years old</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Experience</div>
                <div className="text-slate-400 text-sm">
                  2+ years coaching experience
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Certification</div>
                <div className="text-slate-400 text-sm">
                  Valid coaching certification
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Background Check</div>
                <div className="text-slate-400 text-sm">
                  Clean criminal record
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CoachRegistration;
