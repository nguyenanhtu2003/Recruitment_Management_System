const db = require("../config/connect.config");

const userModel = {
  getAllUsers: async () => {
    try {
      const [data] = await db.execute("SELECT * FROM `users` ORDER BY id DESC");
      return data;
    } catch (error) {
      console.error("Lỗi trong quá trình truy vấn cơ sở dữ liệu:", error);
      throw error;
    }
  },

  getIdUser: async (id) => {
    try {
      const [data] = await db.execute("SELECT * FROM `users` WHERE id = ?", [
        id,
      ]);
      return data[0];
    } catch (error) {
      console.error("Lỗi trong quá trình truy vấn cơ sở dữ liệu:", error);
      throw error;
    }
  },

  createUser: async (data) => {
    try {
      const [result] = await db.execute(
        "INSERT INTO users (`username`,``) VALUES (?,?)",
        [data.username]
      );
      return result;
    } catch (error) {
      console.error("Lỗi trong quá trình truy vấn cơ sở dữ liệu:", error);
      throw error;
    }
  },

  updateUser: async (id, data) => {
    try {
      await db.execute(
        "UPDATE `users` SET `username` = ?, `` = ? WHERE id = ?",
        [data.username, id]
      );
      return true;
    } catch (error) {
      console.error("Lỗi trong quá trình truy vấn cơ sở dữ liệu:", error);
      throw error;
    }
  },

  changePassUser: async (id, data) => {
    try {
      await db.execute("UPDATE `users` SET `password` = ? WHERE id = ?", [
        data.password,
        id,
      ]);
      return true;
    } catch (error) {
      console.error("Lỗi trong quá trình truy vấn cơ sở dữ liệu:", error);
      throw error;
    }
  },
  
};

module.exports = userModel;
