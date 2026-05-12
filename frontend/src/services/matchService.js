import API from "./api.js";

const matchService = {
  getAll: () => API.get("/matches").then((res) => res.data),
  create: (payload) => API.post("/matches", payload).then((res) => res.data),
};

export default matchService;
