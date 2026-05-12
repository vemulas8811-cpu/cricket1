import API from "./api.js";

const teamService = {
  getAll: () => API.get("/teams").then((res) => res.data),
  create: (payload) => API.post("/teams", payload).then((res) => res.data),
};

export default teamService;
