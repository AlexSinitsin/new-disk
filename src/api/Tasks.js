import http from "../http";

class Tasks {
  static async getTasks(auteHeader) {
    return await http.get("/notes", {
      params: {},
      headers: { Authorization: `Bearer ${auteHeader}` },
    });
  }
  static async createTask(data, auteHeader) {
    return await http.post("/notes", data, {
      headers: { Authorization: `Bearer ${auteHeader}` },
    });
  }
  static async deleteTask(id, auteHeader) {
    return await http.delete(`/notes/${id}`, {
      data: {},
      headers: { Authorization: `Bearer ${auteHeader}` },
    });
  }
}

export default Tasks;
