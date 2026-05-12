import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Hero from "../components/Hero.jsx";
import {
  Card,
  Section,
  SectionTitle,
  PlayerCard,
  MatchCard,
  Button,
} from "../components/index.js";
import { Trophy, Users, Calendar, TrendingUp, Star, Clock } from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";

const Home = () => {
  const { openRegisterModal } = useAuth();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-05-07T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const upcomingMatches = [
    {
      id: 1,
      team1: "Hyderabad Warriors",
      team2: "Bangalore Titans",
      date: "2026-05-10",
      time: "19:30",
    },
    {
      id: 2,
      team1: "Mumbai Mavericks",
      team2: "Delhi Dynamos",
      date: "2026-05-12",
      time: "20:00",
    },
    {
      id: 3,
      team1: "Chennai Champions",
      team2: "Punjab Panthers",
      date: "2026-05-14",
      time: "19:30",
    },
  ];

  const featuredPlayers = [
    {
      id: 1,
      name: "haresh",
      role: "Batsman",
      team: "Hyderabad Warriors",
      runs: 2450,
      wickets: 0,
    },
    {
      id: 2,
      name: "Rajesh",
      role: "Bowler",
      team: "Mumbai Mavericks",
      runs: 120,
      wickets: 85,
    },
    {
      id: 3,
      name: "Pranav",
      role: "Batsman",
      team: "Bangalore Titans",
      runs: 2200,
      wickets: 5,
    },
  ];

  const teams = [
    "Hyderabad Warriors",
    "Bangalore Titans",
    "Mumbai Mavericks",
    "Delhi Dynamos",
    "Chennai Champions",
    "Kolkata Knights",
    "Punjab Panthers",
    "Rajasthan Royals",
  ];

  const sponsors = ["Nike", "Pepsi", "Vivo", "Byju's", "Oppo", "Dream11"];

  const stats = [
    { label: "Total Matches", value: "60", icon: Calendar },
    { label: "Registered Players", value: "120", icon: Users },
    { label: "Prize Pool", value: "$10M", icon: Trophy },
    { label: "Fan Engagement", value: "2.5M", icon: TrendingUp },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      text: "CPL has brought cricket to a new level!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      text: "Amazing experience watching live matches.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      text: "The best cricket league ever created.",
      rating: 5,
    },
  ];

  return (
    <div className="space-y-20">
      <Hero />

      {/* Upcoming Matches Carousel */}
      <Section>
        <SectionTitle
          title="Upcoming Matches"
          subtitle="Don't miss the next big clash"
        />
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {upcomingMatches.map((match) => (
            <SwiperSlide key={match.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
              >
                <div className="text-center">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-cyan-400 font-semibold">
                      {match.team1}
                    </span>
                    <span className="text-slate-400">vs</span>
                    <span className="text-cyan-400 font-semibold">
                      {match.team2}
                    </span>
                  </div>
                  <p className="text-slate-300">
                    {match.date} at {match.time}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>

      {/* Featured Players */}
      <Section>
        <SectionTitle
          title="Featured Players"
          subtitle="Meet the stars of CPL"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </Section>

      {/* Team Logos Slider */}
      <Section>
        <SectionTitle
          title="Our Teams"
          subtitle="Elite franchises competing for glory"
        />
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [-100, -200] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-8"
          >
            {[...teams, ...teams].map((team, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-slate-800/50 rounded-xl p-6 text-center min-w-[200px]"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-white font-semibold">{team}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Sponsor Marquee */}
      <Section>
        <SectionTitle title="Our Sponsors" subtitle="Proud partners of CPL" />
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [-100, -200] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="flex gap-8"
          >
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-slate-800/50 rounded-xl p-4 text-center min-w-[150px]"
              >
                <h3 className="text-cyan-400 font-semibold">{sponsor}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Statistics Section */}
      <Section>
        <SectionTitle
          title="League Statistics"
          subtitle="Numbers that define CPL"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center"
            >
              <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Countdown Timer */}
      <Section>
        <SectionTitle
          title="Season Starts In"
          subtitle="Get ready for CPL 2026"
        />
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 text-center">
          <div className="grid grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-cyan-400">
                {timeLeft.days}
              </div>
              <div className="text-slate-400">Days</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400">
                {timeLeft.hours}
              </div>
              <div className="text-slate-400">Hours</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400">
                {timeLeft.minutes}
              </div>
              <div className="text-slate-400">Minutes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400">
                {timeLeft.seconds}
              </div>
              <div className="text-slate-400">Seconds</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Trophy Showcase */}
      <Section>
        <SectionTitle
          title="Trophy Showcase"
          subtitle="The ultimate prize awaits"
        />
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <Trophy className="w-32 h-32 text-yellow-400 mx-auto mb-4" />
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-2">
            CPL Championship Trophy
          </h3>
          <p className="text-slate-400">Worth $2 Million</p>
        </div>
      </Section>

      {/* Fan Testimonials */}
      <Section>
        <SectionTitle title="Fan Testimonials" subtitle="What our fans say" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-slate-300 mb-4">"{testimonial.text}"</p>
              <p className="text-cyan-400 font-semibold">
                - {testimonial.name}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Banner */}
      <Section>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Join CPL?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of the next cricket revolution
          </p>
          <Button variant="secondary" size="lg" onClick={openRegisterModal}>
            Register Now
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Home;
