import app_url from "@/config/constants";
import axios from "axios";

class Fetcher {
  constructor() {
    this.axiosSetup = null;
    this.setup();
  }

  setup = async () => {
    this.axiosSetup = axios.create({
      baseURL: app_url,
      timeout: 20000,
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });

    // ✅ Simple Error Handling (no auth logic)
    this.axiosSetup.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error("API Error:", error.response || error.message);
        return Promise.reject(error);
      }
    );
  };

  get = (route, params) => {
    return this.axiosSetup.get(route, params);
  };

  post = (route, params, extra) => {
    return this.axiosSetup.post(route, params, extra);
  };

  patch = (route, params, extra) => {
    return this.axiosSetup.patch(route, params, extra);
  };

  put = (route, params, extra) => {
    return this.axiosSetup.put(route, params, extra);
  };

  delete = (route, params, extra) => {
    return this.axiosSetup.delete(route, params, extra);
  };
}

export default new Fetcher();
