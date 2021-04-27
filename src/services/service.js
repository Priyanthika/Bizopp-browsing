import http from "../services/http-common";

const register = data => {
    return http.post("/register", data);
  };

const login = data => {
    return http.post("/login", data);
  };

  export default {
    register,
    login
  };