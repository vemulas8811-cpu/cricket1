import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Building,
  Users,
  Calendar,
  CheckCircle,
  Upload,
  Phone,
  Mail,
} from "lucide-react";

const VenueRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    venueInfo: {
      name: "",
      type: "",
      capacity: "",
      location: "",
      city: "",
      state: "",
      pincode: "",
      contactPerson: "",
      contactEmail: "",
      contactPhone: "",
      description: "",
    },
    facilities: {
      pitchType: [],
      lighting: false,
      dressingRooms: "",
      parkingCapacity: "",
      floodlights: false,
      practiceNets: "",
      mediaFacilities: false,
      hospitalitySuites: false,
    },
    documents: {
      ownershipProof: null,
      layoutPlan: null,
      safetyCertificate: null,
      insuranceCertificate: null,
      photos: null,
    },
  });

  const steps = [
    { id: 1, title: "Venue Information", icon: Building },
    { id: 2, title: "Facilities & Amenities", icon: Users },
    { id: 3, title: "Documents Upload", icon: Upload },
  ];

  const venueTypes = [
    "International Cricket Stadium",
    "Domestic Cricket Ground",
    "Academy Ground",
    "Training Facility",
    "Multi-purpose Stadium",
  ];

  const pitchTypes = ["Grass", "Turf", "Hybrid", "Cement", "Matting"];

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handlePitchTypeToggle = (type) => {
    setFormData((prev) => ({
      ...prev,
      facilities: {
        ...prev.facilities,
        pitchType: prev.facilities.pitchType.includes(type)
          ? prev.facilities.pitchType.filter((t) => t !== type)
          : [...prev.facilities.pitchType, type],
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
    console.log("Submitting venue registration:", formData);
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
            Venue Registration
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Register your cricket venue to host CPL matches and become part of
            cricket history
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
                Venue Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-slate-300 mb-2">
                    Venue Name *
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.venueInfo.name}
                    onChange={(e) =>
                      handleInputChange("venueInfo", "name", e.target.value)
                    }
                    placeholder="e.g., DY Patil Stadium"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Venue Type *
                  </label>
                  <select
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.venueInfo.type}
                    onChange={(e) =>
                      handleInputChange("venueInfo", "type", e.target.value)
                    }
                  >
                    <option value="">Select Venue Type</option>
                    {venueTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Seating Capacity *
                  </label>
                  <input
                    type="number"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.venueInfo.capacity}
                    onChange={(e) =>
                      handleInputChange("venueInfo", "capacity", e.target.value)
                    }
                    placeholder="e.g., 55000"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-slate-300 mb-2">
                    Full Address *
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.venueInfo.location}
                    onChange={(e) =>
                      handleInputChange("venueInfo", "location", e.target.value)
                    }
                    placeholder="Street address, landmark"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">City *</label>
                  <input
                    type="text"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.venueInfo.city}
                    onChange={(e) =>
                      handleInputChange("venueInfo", "city", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">State *</label>
                  <input
                    type="text"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.venueInfo.state}
                    onChange={(e) =>
                      handleInputChange("venueInfo", "state", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">Pincode *</label>
                  <input
                    type="text"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.venueInfo.pincode}
                    onChange={(e) =>
                      handleInputChange("venueInfo", "pincode", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.venueInfo.contactPerson}
                    onChange={(e) =>
                      handleInputChange(
                        "venueInfo",
                        "contactPerson",
                        e.target.value,
                      )
                    }
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.venueInfo.contactEmail}
                    onChange={(e) =>
                      handleInputChange(
                        "venueInfo",
                        "contactEmail",
                        e.target.value,
                      )
                    }
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                    value={formData.venueInfo.contactPhone}
                    onChange={(e) =>
                      handleInputChange(
                        "venueInfo",
                        "contactPhone",
                        e.target.value,
                      )
                    }
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-slate-300 mb-2">
                    Venue Description
                  </label>
                  <textarea
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 h-24"
                    value={formData.venueInfo.description}
                    onChange={(e) =>
                      handleInputChange(
                        "venueInfo",
                        "description",
                        e.target.value,
                      )
                    }
                    placeholder="Describe your venue, its history, unique features, etc."
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Facilities & Amenities
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-slate-300 mb-2">
                    Pitch Types Available *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {pitchTypes.map((type) => (
                      <label key={type} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.facilities.pitchType.includes(type)}
                          onChange={() => handlePitchTypeToggle(type)}
                          className="w-4 h-4 text-cyan-600 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                        />
                        <span className="text-slate-300 text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 mb-2">
                      Number of Dressing Rooms
                    </label>
                    <input
                      type="number"
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                      value={formData.facilities.dressingRooms}
                      onChange={(e) =>
                        handleInputChange(
                          "facilities",
                          "dressingRooms",
                          e.target.value,
                        )
                      }
                      placeholder="e.g., 4"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2">
                      Parking Capacity
                    </label>
                    <input
                      type="number"
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                      value={formData.facilities.parkingCapacity}
                      onChange={(e) =>
                        handleInputChange(
                          "facilities",
                          "parkingCapacity",
                          e.target.value,
                        )
                      }
                      placeholder="e.g., 2000"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2">
                      Practice Nets Available
                    </label>
                    <input
                      type="number"
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                      value={formData.facilities.practiceNets}
                      onChange={(e) =>
                        handleInputChange(
                          "facilities",
                          "practiceNets",
                          e.target.value,
                        )
                      }
                      placeholder="e.g., 6"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.facilities.lighting}
                      onChange={(e) =>
                        handleInputChange(
                          "facilities",
                          "lighting",
                          e.target.checked,
                        )
                      }
                      className="w-5 h-5 text-cyan-600 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                    />
                    <label className="text-slate-300">
                      Floodlights Available
                    </label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.facilities.floodlights}
                      onChange={(e) =>
                        handleInputChange(
                          "facilities",
                          "floodlights",
                          e.target.checked,
                        )
                      }
                      className="w-5 h-5 text-cyan-600 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                    />
                    <label className="text-slate-300">
                      Day/Night Match Capability
                    </label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.facilities.mediaFacilities}
                      onChange={(e) =>
                        handleInputChange(
                          "facilities",
                          "mediaFacilities",
                          e.target.checked,
                        )
                      }
                      className="w-5 h-5 text-cyan-600 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                    />
                    <label className="text-slate-300">Media Facilities</label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.facilities.hospitalitySuites}
                      onChange={(e) =>
                        handleInputChange(
                          "facilities",
                          "hospitalitySuites",
                          e.target.checked,
                        )
                      }
                      className="w-5 h-5 text-cyan-600 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                    />
                    <label className="text-slate-300">Hospitality Suites</label>
                  </div>
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
                    Ownership/Lease Proof *
                  </label>
                  <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) =>
                        handleFileUpload("ownershipProof", e.target.files[0])
                      }
                      className="hidden"
                      id="ownershipProof"
                    />
                    <label htmlFor="ownershipProof" className="cursor-pointer">
                      <div className="text-slate-400 mb-2">
                        Click to upload ownership document
                      </div>
                      <div className="text-cyan-400">
                        PDF, JPG, PNG (Max 5MB)
                      </div>
                    </label>
                  </div>
                  {formData.documents.ownershipProof && (
                    <div className="mt-2 text-green-400 text-sm">
                      ✓ {formData.documents.ownershipProof.name}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Venue Layout Plan *
                  </label>
                  <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png,.dwg"
                      onChange={(e) =>
                        handleFileUpload("layoutPlan", e.target.files[0])
                      }
                      className="hidden"
                      id="layoutPlan"
                    />
                    <label htmlFor="layoutPlan" className="cursor-pointer">
                      <div className="text-slate-400 mb-2">
                        Click to upload layout plan
                      </div>
                      <div className="text-cyan-400">
                        PDF, JPG, PNG, DWG (Max 10MB)
                      </div>
                    </label>
                  </div>
                  {formData.documents.layoutPlan && (
                    <div className="mt-2 text-green-400 text-sm">
                      ✓ {formData.documents.layoutPlan.name}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Safety Certificate *
                  </label>
                  <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) =>
                        handleFileUpload("safetyCertificate", e.target.files[0])
                      }
                      className="hidden"
                      id="safetyCertificate"
                    />
                    <label
                      htmlFor="safetyCertificate"
                      className="cursor-pointer"
                    >
                      <div className="text-slate-400 mb-2">
                        Click to upload safety certificate
                      </div>
                      <div className="text-cyan-400">
                        PDF, JPG, PNG (Max 5MB)
                      </div>
                    </label>
                  </div>
                  {formData.documents.safetyCertificate && (
                    <div className="mt-2 text-green-400 text-sm">
                      ✓ {formData.documents.safetyCertificate.name}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Insurance Certificate *
                  </label>
                  <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) =>
                        handleFileUpload(
                          "insuranceCertificate",
                          e.target.files[0],
                        )
                      }
                      className="hidden"
                      id="insuranceCertificate"
                    />
                    <label
                      htmlFor="insuranceCertificate"
                      className="cursor-pointer"
                    >
                      <div className="text-slate-400 mb-2">
                        Click to upload insurance certificate
                      </div>
                      <div className="text-cyan-400">
                        PDF, JPG, PNG (Max 5MB)
                      </div>
                    </label>
                  </div>
                  {formData.documents.insuranceCertificate && (
                    <div className="mt-2 text-green-400 text-sm">
                      ✓ {formData.documents.insuranceCertificate.name}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Venue Photos *
                  </label>
                  <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      multiple
                      onChange={(e) =>
                        handleFileUpload("photos", e.target.files)
                      }
                      className="hidden"
                      id="photos"
                    />
                    <label htmlFor="photos" className="cursor-pointer">
                      <div className="text-slate-400 mb-2">
                        Click to upload venue photos
                      </div>
                      <div className="text-cyan-400">
                        JPG, PNG (Max 20MB total, min 5 photos)
                      </div>
                    </label>
                  </div>
                  {formData.documents.photos && (
                    <div className="mt-2 text-green-400 text-sm">
                      ✓ {formData.documents.photos.length} photos uploaded
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
            Venue Registration Requirements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Minimum Capacity</div>
                <div className="text-slate-400 text-sm">5,000 spectators</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Pitch Standards</div>
                <div className="text-slate-400 text-sm">
                  ICC compliant pitch
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="text-white font-semibold">
                  Safety Compliance
                </div>
                <div className="text-slate-400 text-sm">
                  Valid safety certificates
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Insurance</div>
                <div className="text-slate-400 text-sm">
                  Comprehensive coverage
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Accessibility</div>
                <div className="text-slate-400 text-sm">
                  Disabled-friendly facilities
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Media Facilities</div>
                <div className="text-slate-400 text-sm">
                  Broadcast-ready infrastructure
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VenueRegistration;
