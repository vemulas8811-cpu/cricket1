import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle, Search } from "lucide-react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      category: "Tournament",
      questions: [
        {
          q: "When does CPL 2026 start?",
          a: "CPL 2026 is scheduled to begin on March 15, 2026, with the opening ceremony and first match.",
        },
        {
          q: "How many teams are participating?",
          a: "Ten teams will compete in CPL 2026, featuring both established franchises and new entries.",
        },
        {
          q: "What is the format of the tournament?",
          a: "The tournament follows a round-robin format followed by playoffs, with the final scheduled for April 20, 2026.",
        },
      ],
    },
    {
      category: "Tickets",
      questions: [
        {
          q: "How can I buy tickets?",
          a: "Tickets are available through our official website, mobile app, and authorized ticket partners.",
        },
        {
          q: "What are the ticket prices?",
          a: "Ticket prices range from ₹500 to ₹10,000 depending on the match, seat category, and stadium.",
        },
        {
          q: "Can I get refunds on tickets?",
          a: "Refunds are available up to 48 hours before the match, subject to our cancellation policy.",
        },
      ],
    },
    {
      category: "Fantasy League",
      questions: [
        {
          q: "How do I join the fantasy league?",
          a: "Register on our website or app, create your team within the budget, and start competing.",
        },
        {
          q: "What is the entry fee?",
          a: "Basic entry is free. Premium contests have entry fees starting from ₹20.",
        },
        {
          q: "How are points calculated?",
          a: "Points are awarded based on player performance, including runs, wickets, catches, etc.",
        },
      ],
    },
    {
      category: "Players & Teams",
      questions: [
        {
          q: "How do players get selected?",
          a: "Players are selected through the annual auction where teams bid for players.",
        },
        {
          q: "Can I try out for CPL?",
          a: "CPL selects players through established domestic leagues and international competitions.",
        },
        {
          q: "How many foreign players per team?",
          a: "Each team can have up to 4 overseas players in their squad.",
        },
      ],
    },
  ];

  const filteredFaqs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.a.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0);

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
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about CPL 2026
          </p>
        </div>

        {/* Search Bar */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFaqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openItems.has(globalIndex);

                  return (
                    <motion.div
                      key={faqIndex}
                      className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden"
                      whileHover={{ scale: 1.01 }}
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                      >
                        <span className="text-white font-semibold">
                          {faq.q}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5 text-slate-400" />
                        </motion.div>
                      </button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-slate-400 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Need Help */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <HelpCircle className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here
            to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.button>
            <motion.button
              className="bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Chat
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FAQ;
