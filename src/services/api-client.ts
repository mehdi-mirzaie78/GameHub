import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "6ca3baff9f604dadbfb0c9f12fa7b356" },
});
