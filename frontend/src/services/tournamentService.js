import API from "./api.js";

const tournamentService = {
  getAll: () => API.get("/tournaments").then((res) => res.data),
  create: (payload) =>
    API.post("/tournaments", payload).then((res) => res.data),
};

export default tournamentService;
