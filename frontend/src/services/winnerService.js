import API from "./api.js";

const winnerService = {
  getAll: () => API.get("/winners").then((res) => res.data),
};

export default winnerService;
