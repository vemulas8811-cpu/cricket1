import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sachin Tendulkar",
      role: "Cricket Legend & CPL Ambassador",
      image: "ST",
      rating: 5,
      testimonial:
        "CPL has revolutionized cricket in India. The energy, the competition, and the fan engagement are unparalleled. It's not just a league; it's a celebration of the sport we all love.",
      highlights: [
        "Fan Engagement",
        "Player Development",
        "Entertainment Value",
      ],
    },
    {
      id: 2,
      name: "Virat Kohli",
      role: "RCB Captain",
      image: "VK",
      rating: 5,
      testimonial:
        "Playing in CPL has been an incredible journey. The support from fans, the intensity of matches, and the brotherhood among players make every season memorable. This league has given wings to my dreams.",
      highlights: ["Fan Support", "Team Spirit", "Competitive Intensity"],
    },
    {
      id: 3,
      name: "Smriti Mandhana",
      role: "RCB Women's Captain",
      image: "SM",
      rating: 5,
      testimonial:
        "CPL has been a game-changer for women's cricket. The platform, the visibility, and the opportunities have empowered so many female cricketers. We're not just playing; we're inspiring the next generation.",
      highlights: ["Women Empowerment", "Visibility", "Inspiration"],
    },
    {
      id: 4,
      name: "MS Dhoni",
      role: "CSK Mentor",
      image: "MD",
      rating: 5,
      testimonial:
        "The way CPL has evolved over the years is remarkable. From the first season to now, it has maintained the magic while embracing innovation. The fans' passion keeps us all motivated.",
      highlights: ["Evolution", "Innovation", "Fan Passion"],
    },
    {
      id: 5,
      name: "Rohit Sharma",
      role: "MI Captain",
      image: "RS",
      rating: 5,
      testimonial:
        "CPL is where dreams come true. The atmosphere at Wankhede during finals is electric. Every player, from debutants to veterans, gets the respect and platform they deserve.",
      highlights: [
        "Dream Fulfillment",
        "Electric Atmosphere",
        "Equal Opportunities",
      ],
    },
    {
      id: 6,
      name: "Sunil Gavaskar",
      role: "CPL Commentator",
      image: "SG",
      rating: 5,
      testimonial:
        "I've seen cricket evolve dramatically, but CPL has brought a new dimension to the game. The entertainment value, the marketing, and the global appeal are simply outstanding.",
      highlights: ["Entertainment", "Global Appeal", "Marketing Excellence"],
    },
  ];

  const fanTestimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      image: "PS",
      rating: 5,
      testimonial:
        "Being a CPL fan is an emotion. The way the teams fight, the last-ball finishes, the celebrations - it's pure magic. Wankhede during playoffs gives me goosebumps every time.",
      favoriteTeam: "MI",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi",
      image: "RK",
      rating: 5,
      testimonial:
        "CPL has brought cricket back to our living rooms. The digital experience, the behind-the-scenes content, and the fan engagement activities make every season special.",
      favoriteTeam: "DC",
    },
    {
      id: 3,
      name: "Anita Patel",
      location: "Ahmedabad",
      image: "AP",
      rating: 5,
      testimonial:
        "As a working mother, CPL gives me the perfect entertainment. The short format, the high-octane action, and the family-friendly atmosphere make it our weekend ritual.",
      favoriteTeam: "GT",
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Jaipur",
      image: "VS",
      rating: 5,
      testimonial:
        "CPL fantasy league has made me a student of the game. I analyze players, study stats, and enjoy cricket more than ever. It's not just watching; it's participating.",
      favoriteTeam: "RR",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Testimonials
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear from cricket legends, players, and fans about their CPL
            experience
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <motion.div
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <motion.button
                onClick={prevTestimonial}
                className="p-3 bg-slate-700 rounded-full hover:bg-slate-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">
                    {currentTestimonial.image}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {currentTestimonial.name}
                </h3>
                <p className="text-cyan-400 font-semibold mb-2">
                  {currentTestimonial.role}
                </p>
                <div className="flex justify-center mb-4">
                  {Array.from({ length: currentTestimonial.rating }, (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="p-3 bg-slate-700 rounded-full hover:bg-slate-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <Quote className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
              <p className="text-xl text-slate-300 mb-8 italic leading-relaxed">
                "{currentTestimonial.testimonial}"
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {currentTestimonial.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-cyan-400" : "bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Fan Testimonials */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Fan Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fanTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {testimonial.image}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {testimonial.location}
                    </p>
                    <div className="flex items-center mt-1">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <Quote className="w-6 h-6 text-slate-400 mb-3" />
                <p className="text-slate-300 mb-4 italic">
                  "{testimonial.testimonial}"
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold text-sm">
                    Fan of {testimonial.favoriteTeam}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">4.9/5</div>
            <div className="text-slate-400 text-sm">Average Rating</div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <Quote className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">500+</div>
            <div className="text-slate-400 text-sm">Testimonials</div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <Star className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">95%</div>
            <div className="text-slate-400 text-sm">Satisfaction</div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <Star className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">1M+</div>
            <div className="text-slate-400 text-sm">Happy Fans</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Share Your Experience
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Your story matters to us. Share your CPL experience and help inspire
            fellow cricket enthusiasts around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Write a Review
            </motion.button>
            <motion.button
              className="bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Rate Your Experience
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
