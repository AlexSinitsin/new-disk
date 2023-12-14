import http from "../http";

class Auth {
  static async registration(data) {
    return await http.post("/reg", data);
  }
  static async auth(data) {
    return await http.post("/auth", data);
  }
  static async getUser(auteHeader) {
    return await http.get("/auth", {
      params: {},
      headers: { Authorization: `Bearer ${auteHeader}` },
    });
  }
  static async logOut(auteHeader) {
    return await http.delete("/auth", {
      data: {},
      headers: { Authorization: `Bearer ${auteHeader}` },
    });
  }
}

export default Auth;
