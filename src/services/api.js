import axios from "axios";

function getToken () {
  return localStorage.getItem("token");
}

const api = axios.create({
  baseURL: "https://kate.leagueofdevs.com.br",
  responseType: "json"
});

api.interceptors.request.use(
  config => {
    const token = getToken();

    if (token) {
      config.headers["x-token"] = token;
    }

    return config;
  },
  error => Promise.reject(error)
);

export default api;