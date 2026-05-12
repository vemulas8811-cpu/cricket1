import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X, Eye, EyeOff, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const roleOptions = [
  { id: "Batsman", label: "🏏 Batsman" },
  { id: "Bowler", label: "🎯 Bowler" },
  { id: "All Rounder", label: "⚡ All Rounder" },
  { id: "Wicket Keeper", label: "🧤 Wicket Keeper" },
];

const initialRegisterData = {
  name: "",
  email: "",
  phone: "",
  age: "",
  city: "",
  password: "",
  confirmPassword: "",
  role: "Bowler",
};

const initialLoginData = { email: "", password: "" };

const AuthModal = () => {
  const {
    modalOpen,
    modalMode,
    closeAuthModal,
    openLoginModal,
    openRegisterModal,
    register,
    login,
    user,
  } = useAuth();
  const [registerData, setRegisterData] = useState(initialRegisterData);
  const [loginData, setLoginData] = useState(initialLoginData);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successState, setSuccessState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!modalOpen) {
      setRegisterData(initialRegisterData);
      setLoginData(initialLoginData);
      setShowPassword(false);
      setShowConfirmPassword(false);
      setIsSubmitting(false);
      setSuccessState(false);
      setErrorMessage("");
    }
  }, [modalOpen]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && modalOpen) {
        closeAuthModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeAuthModal, modalOpen]);

  if (!modalOpen) return null;

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (
      !registerData.name ||
      !registerData.email ||
      !registerData.phone ||
      !registerData.age ||
      !registerData.city ||
      !registerData.password ||
      !registerData.confirmPassword
    ) {
      setErrorMessage("Please fill in all registration fields.");
      return;
    }

    if (registerData.password !== registerData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    register(registerData);
    setSuccessState(true);
    setIsSubmitting(false);

    setTimeout(() => {
      closeAuthModal();
      navigate("/player-dashboard");
    }, 2600);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!loginData.email || !loginData.password) {
      setErrorMessage("Please enter your email and password.");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    login(loginData);
    setSuccessState(true);
    setIsSubmitting(false);

    setTimeout(() => {
      closeAuthModal();
      navigate("/player-dashboard");
    }, 2200);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-2xl px-4 py-10"
      onClick={closeAuthModal}
    >
      <motion.div
        initial={{ y: 40, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-3xl rounded-[2rem] border border-cyan-500/20 bg-slate-900/90 p-8 shadow-2xl shadow-cyan-500/20 backdrop-blur-2xl max-h-[90vh] overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={closeAuthModal}
          className="absolute right-5 top-5 rounded-full border border-slate-700 bg-slate-950/90 p-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400/80">
              {modalMode === "register"
                ? "Premium Registration"
                : "Login Access"}
            </p>
            <h2 className="mt-3 text-4xl font-black text-white">
              {modalMode === "register"
                ? "Join CPL as a Player"
                : "Login to your dashboard"}
            </h2>
            <p className="mt-3 max-w-xl text-slate-400">
              {modalMode === "register"
                ? "Create your player identity and access the all-new Cricket Premier League experience."
                : "Use your credentials to unlock your player dashboard and match insights."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={openRegisterModal}
              className={`rounded-3xl px-5 py-3 text-sm font-semibold transition ${
                modalMode === "register"
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30"
                  : "border border-slate-700 text-slate-300 hover:border-cyan-400"
              }`}
            >
              Register
            </button>
            <button
              type="button"
              onClick={openLoginModal}
              className={`rounded-3xl px-5 py-3 text-sm font-semibold transition ${
                modalMode === "login"
                  ? "bg-blue-500 text-slate-950 shadow-lg shadow-blue-500/30"
                  : "border border-slate-700 text-slate-300 hover:border-blue-400"
              }`}
            >
              Login
            </button>
          </div>
        </div>

        {successState ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mt-10 overflow-hidden rounded-[2rem] bg-slate-950/95 p-10 text-center ring-1 ring-cyan-500/20 shadow-2xl shadow-cyan-500/10"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, index) => (
                <motion.span
                  key={index}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: [0, 20, 0], opacity: [1, 0.8, 0] }}
                  transition={{
                    duration: 1.8,
                    delay: index * 0.12,
                    repeat: Infinity,
                  }}
                  className="absolute inline-block text-cyan-300"
                  style={{
                    left: `${10 + index * 10}%`,
                    top: `${index * 8}%`,
                    fontSize: 24,
                  }}
                >
                  🎉
                </motion.span>
              ))}
            </div>
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300 shadow-glow ring-1 ring-cyan-400/20">
              <CheckCircle size={52} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">
              {modalMode === "register"
                ? "Registration Complete"
                : "Login Successful"}
            </h3>
            <p className="mx-auto mb-4 max-w-xl text-slate-400">
              {modalMode === "register"
                ? "Your CPL player profile has been created. Redirecting to dashboard shortly."
                : "Welcome back! Your player dashboard is ready. Redirecting now."}
            </p>
            <div className="mx-auto max-w-sm rounded-3xl border border-slate-700 bg-slate-900/80 p-5 text-left text-slate-300">
              <p className="text-cyan-300 font-semibold mb-2">
                Player ID: {user?.id || "CPL-2026-1045"}
              </p>
              <p className="mb-1">Role: {user?.role || registerData.role}</p>
              <p className="mb-1">
                Status:{" "}
                {modalMode === "register"
                  ? "Registration Successful"
                  : "Login Successful"}
              </p>
            </div>
          </motion.div>
        ) : (
          <form
            className="mt-10 grid gap-6"
            onSubmit={
              modalMode === "register"
                ? handleRegisterSubmit
                : handleLoginSubmit
            }
          >
            {modalMode === "register" && (
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={registerData.name}
                    onChange={(event) =>
                      setRegisterData((prev) => ({
                        ...prev,
                        name: event.target.value,
                      }))
                    }
                    placeholder=" "
                    className="peer w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                  <label className="pointer-events-none absolute left-4 top-4 text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400">
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={registerData.email}
                    onChange={(event) =>
                      setRegisterData((prev) => ({
                        ...prev,
                        email: event.target.value,
                      }))
                    }
                    placeholder=" "
                    className="peer w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                  <label className="pointer-events-none absolute left-4 top-4 text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400">
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={registerData.phone}
                    onChange={(event) =>
                      setRegisterData((prev) => ({
                        ...prev,
                        phone: event.target.value,
                      }))
                    }
                    placeholder=" "
                    className="peer w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                  <label className="pointer-events-none absolute left-4 top-4 text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400">
                    Phone Number
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    name="age"
                    min="12"
                    value={registerData.age}
                    onChange={(event) =>
                      setRegisterData((prev) => ({
                        ...prev,
                        age: event.target.value,
                      }))
                    }
                    placeholder=" "
                    className="peer w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                  <label className="pointer-events-none absolute left-4 top-4 text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400">
                    Age
                  </label>
                </div>
                <div className="relative sm:col-span-2">
                  <input
                    type="text"
                    name="city"
                    value={registerData.city}
                    onChange={(event) =>
                      setRegisterData((prev) => ({
                        ...prev,
                        city: event.target.value,
                      }))
                    }
                    placeholder=" "
                    className="peer w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                  <label className="pointer-events-none absolute left-4 top-4 text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400">
                    City
                  </label>
                </div>
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={
                    modalMode === "register"
                      ? registerData.password
                      : loginData.password
                  }
                  onChange={(event) => {
                    const value = event.target.value;
                    if (modalMode === "register") {
                      setRegisterData((prev) => ({ ...prev, password: value }));
                    } else {
                      setLoginData((prev) => ({ ...prev, password: value }));
                    }
                  }}
                  placeholder=" "
                  className="peer w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-4 pr-14 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
                <label className="pointer-events-none absolute left-4 top-4 text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {modalMode === "register" && (
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={registerData.confirmPassword}
                    onChange={(event) =>
                      setRegisterData((prev) => ({
                        ...prev,
                        confirmPassword: event.target.value,
                      }))
                    }
                    placeholder=" "
                    className="peer w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-4 pr-14 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                  <label className="pointer-events-none absolute left-4 top-4 text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400">
                    Confirm Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              )}
            </div>

            {modalMode === "register" && (
              <div className="rounded-[1.75rem] border border-slate-700 bg-slate-950/80 p-4">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Select your role
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {roleOptions.map((role) => {
                    const selected = registerData.role === role.id;
                    return (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() =>
                          setRegisterData((prev) => ({
                            ...prev,
                            role: role.id,
                          }))
                        }
                        className={`rounded-3xl border p-4 text-left transition ${
                          selected
                            ? "border-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/10"
                            : "border-slate-700 bg-slate-950/90 hover:border-cyan-400"
                        }`}
                      >
                        <p className="text-xl">{role.label}</p>
                        <p className="mt-1 text-sm text-slate-400">
                          {selected ? "Selected role" : "Tap to choose"}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {errorMessage && (
              <div className="rounded-3xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {errorMessage}
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? "Processing..."
                  : modalMode === "register"
                    ? "Complete Registration"
                    : "Login to Dashboard"}
              </button>
              <button
                type="button"
                onClick={() =>
                  modalMode === "register"
                    ? openLoginModal()
                    : openRegisterModal()
                }
                className="rounded-3xl border border-slate-700 bg-slate-950/90 px-6 py-4 text-base font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                {modalMode === "register"
                  ? "Already have an account? Login"
                  : "New here? Register"}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
};

export default AuthModal;
