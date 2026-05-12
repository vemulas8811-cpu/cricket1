import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AuthModal from "./components/AuthModal.jsx";
import ToastContainer from "./components/ToastContainer.jsx";
import Home from "./pages/Home.jsx";
import LeagueInfo from "./pages/LeagueInfo.jsx";
import Teams from "./pages/Teams.jsx";
import Players from "./pages/Players.jsx";
import Matches from "./pages/Matches.jsx";
import Highlights from "./pages/Highlights.jsx";
import LiveMatches from "./pages/LiveMatches.jsx";
import MatchCenter from "./pages/MatchCenter.jsx";
import TournamentSchedule from "./pages/TournamentSchedule.jsx";
import PointsTable from "./pages/PointsTable.jsx";
import PlayerAuction from "./pages/PlayerAuction.jsx";
import TeamRegistration from "./pages/TeamRegistration.jsx";
import Sponsors from "./pages/Sponsors.jsx";
import Gallery from "./pages/Gallery.jsx";
import MediaCenter from "./pages/MediaCenter.jsx";
import NewsUpdates from "./pages/NewsUpdates.jsx";
import FantasyLeague from "./pages/FantasyLeague.jsx";
import FanZone from "./pages/FanZone.jsx";
import Tickets from "./pages/Tickets.jsx";
import Merchandise from "./pages/Merchandise.jsx";
import HallOfFame from "./pages/HallOfFame.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AnalyticsDashboard from "./pages/AnalyticsDashboard.jsx";
import Contact from "./pages/Contact.jsx";
import FAQ from "./pages/FAQ.jsx";
import AboutLeague from "./pages/AboutLeague.jsx";
import Careers from "./pages/Careers.jsx";
import Awards from "./pages/Awards.jsx";
import Stadiums from "./pages/Stadiums.jsx";
import MatchHighlights from "./pages/MatchHighlights.jsx";
import NotificationsCenter from "./pages/NotificationsCenter.jsx";
import Settings from "./pages/Settings.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import JoinTournament from "./pages/JoinTournament.jsx";
import CoachRegistration from "./pages/CoachRegistration.jsx";
import UmpireRegistration from "./pages/UmpireRegistration.jsx";
import VolunteerRegistration from "./pages/VolunteerRegistration.jsx";
import VenueRegistration from "./pages/VenueRegistration.jsx";
import CricketAcademy from "./pages/CricketAcademy.jsx";
import SuccessStories from "./pages/SuccessStories.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import EventTimeline from "./pages/EventTimeline.jsx";
import MobileAppPromo from "./pages/MobileAppPromo.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import PlayerDashboard from "./pages/PlayerDashboard.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen">
          <Navbar />
          <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/league-info" element={<LeagueInfo />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/players" element={<Players />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/highlights" element={<Highlights />} />
              <Route path="/live-matches" element={<LiveMatches />} />
              <Route path="/match-center" element={<MatchCenter />} />
              <Route
                path="/tournament-schedule"
                element={<TournamentSchedule />}
              />
              <Route path="/points-table" element={<PointsTable />} />
              <Route path="/player-auction" element={<PlayerAuction />} />
              <Route path="/team-registration" element={<TeamRegistration />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/media-center" element={<MediaCenter />} />
              <Route path="/news-updates" element={<NewsUpdates />} />
              <Route path="/fantasy-league" element={<FantasyLeague />} />
              <Route path="/fan-zone" element={<FanZone />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/merchandise" element={<Merchandise />} />
              <Route path="/hall-of-fame" element={<HallOfFame />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route
                path="/analytics-dashboard"
                element={<AnalyticsDashboard />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/about-league" element={<AboutLeague />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/stadiums" element={<Stadiums />} />
              <Route path="/match-highlights" element={<MatchHighlights />} />
              <Route path="/notifications" element={<NotificationsCenter />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/join-tournament" element={<JoinTournament />} />
              <Route
                path="/coach-registration"
                element={<CoachRegistration />}
              />
              <Route
                path="/umpire-registration"
                element={<UmpireRegistration />}
              />
              <Route
                path="/volunteer-registration"
                element={<VolunteerRegistration />}
              />
              <Route
                path="/venue-registration"
                element={<VenueRegistration />}
              />
              <Route path="/cricket-academy" element={<CricketAcademy />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/event-timeline" element={<EventTimeline />} />
              <Route path="/mobile-app-promo" element={<MobileAppPromo />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/player-dashboard" element={<PlayerDashboard />} />
            </Routes>
          </main>
          <Footer />
          <AuthModal />
          <ToastContainer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
