import API from "./api.js";

const leaderboardService = {
  getLeaderboard: () => API.get("/leaderboard").then((res) => res.data),
};

export default leaderboardService;
