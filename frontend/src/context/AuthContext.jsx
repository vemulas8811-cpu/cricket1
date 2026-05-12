import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);
const STORAGE_KEY = "cpl-auth-user";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("register");
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem(STORAGE_KEY);
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 3000);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const saveUser = (userData) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    setUser(userData);
  };

  const openRegisterModal = () => {
    setModalMode("register");
    setModalOpen(true);
  };

  const openLoginModal = () => {
    setModalMode("login");
    setModalOpen(true);
  };

  const closeAuthModal = () => setModalOpen(false);

  const login = ({ email }) => {
    const nameFromEmail = email.split("@")[0] || "CPL Player";
    const loginUser = {
      id: `CPL-2026-${Math.floor(Math.random() * 9000) + 1000}`,
      name: nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1),
      email,
      phone: "000-000-0000",
      age: "24",
      city: "Mumbai",
      role: "Bowler",
      team: "Unassigned",
      talentScore: 93,
      upcomingMatches: [
        {
          id: 1,
          label: "Hyderabad Warriors vs Bangalore Titans",
          time: "May 10, 7:30 PM",
        },
        {
          id: 2,
          label: "Mumbai Mavericks vs Delhi Dynamos",
          time: "May 12, 8:00 PM",
        },
      ],
      notifications: [
        "Your training session starts tomorrow.",
        "New CPL challenge unlocked.",
      ],
      stats: {
        matches: 12,
        runs: 483,
        wickets: 18,
        rating: 89,
      },
    };

    saveUser(loginUser);
    setToast({
      message: "Login Successful — Welcome back to CPL!",
      type: "success",
    });
  };

  const register = ({ name, email, phone, age, city, role }) => {
    const registerUser = {
      id: `CPL-2026-${Math.floor(Math.random() * 9000) + 1000}`,
      name,
      email,
      phone,
      age,
      city,
      role,
      team: "Unassigned",
      talentScore: 87,
      upcomingMatches: [
        {
          id: 1,
          label: "Punjab Panthers vs Chennai Champions",
          time: "May 14, 7:30 PM",
        },
        {
          id: 2,
          label: "Rajasthan Royals vs Kolkata Knights",
          time: "May 17, 7:00 PM",
        },
      ],
      notifications: [
        "Welcome to CPL! Your player card is now active.",
        "Complete your profile to join a squad.",
      ],
      stats: {
        matches: 0,
        runs: 0,
        wickets: 0,
        rating: 0,
      },
    };

    saveUser(registerUser);
    setToast({
      message: "Registration Successful — Welcome to Cricket Premier League!",
      type: "success",
    });
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
    setToast({ message: "You have been signed out.", type: "info" });
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        modalOpen,
        modalMode,
        toast,
        openRegisterModal,
        openLoginModal,
        closeAuthModal,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
