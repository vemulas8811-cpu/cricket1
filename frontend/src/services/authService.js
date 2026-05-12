import API from "./api.js";

const authService = {
  setToken(token) {
    localStorage.setItem("token", token);
  },
  clearToken() {
    localStorage.removeItem("token");
  },
  async login(payload) {
    const response = await API.post("/auth/login", payload);
    return response.data;
  },
  async register(payload) {
    const response = await API.post("/auth/register", payload);
    return response.data;
  },
  async fetchProfile() {
    const response = await API.get("/auth/me");
    return response.data;
  },
};

export default authService;
