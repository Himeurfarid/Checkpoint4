const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "exercice" });
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(exercice) {
    return this.connection.query(
      `insert into ${this.table} (title, content) values (?, ?)`,
      [exercice.title, exercice.content]
    );
  }

  update(exercice) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [exercice.title, exercice.content, exercice.id]
    );
  }
}

module.exports = ItemManager;
