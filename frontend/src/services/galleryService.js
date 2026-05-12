import API from "./api.js";

const galleryService = {
  getAll: () => API.get("/gallery").then((res) => res.data),
};

export default galleryService;
