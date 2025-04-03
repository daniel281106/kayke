const db = require('../banco/db.js');

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  static async create(name, email) {
    const [result] = await db.execute(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email]
    );
    return new User(result.insertId, name, email);
  }

  static async findAll() {
    const [rows] = await db.execute('SELECT * FROM users');
    return rows.map(row => new User(row.id, row.name, row.email));
  }
}

module.exports = User;
