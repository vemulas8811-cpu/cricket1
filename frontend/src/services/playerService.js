import API from "./api.js";

const playerService = {
  getAll: () => API.get("/players").then((res) => res.data),
  getById: (id) => API.get(`/players/${id}`).then((res) => res.data),
  update: (id, payload) =>
    API.put(`/players/${id}`, payload).then((res) => res.data),
};

export default playerService;
