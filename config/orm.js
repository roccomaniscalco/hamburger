const connection = require("./connection");

const orm = {
  selectAll: (table) => {
    return new Promise((resolve, reject) => {
      connection.query("select * from ??", [table], (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  },

  insertOne: (table, col, value) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "insert into ?? (??) values (?)",
        [table, col, value],
        (err, res) => {
          if (err) reject(err);
          else resolve(res);
        }
      );
    });
  },

  updateOne: (table, col, value, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `update ?? set ?? = ? where id = ?;`,
        [table, col, value, id],
        (err, res) => {
          if (err) reject(err);
          else resolve(res);
        }
      );
    });
  },
};

module.exports = orm;
