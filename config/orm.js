const connection = require("./connection");

const orm = {
  selectAll: (table) => {
    return new Promise((resolve, reject) => {
      connection.query("select * from ", [table], (err, res) => {
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

  updateOne: (table, col, value, condition) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `update ?? set ?? = ? where ${condition};`,
        [table, col, value],
        (err, res) => {
          if (err) reject(err);
          else resolve(res);
        }
      );
    });
  },
};

module.exports = orm;
