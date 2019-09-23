const sqlite3 = require('sqlite3').verbose();

/**
 * Generate sqlite database
 */
const DB = new sqlite3.Database('./db/interactive_contacts.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    console.error(err.message);
    return;
  }
  createContactsTable(DB);
  console.log('Connected to interactive_contacts database.');
});

/**
 * Create clients table
 */
const createContactsTable = (DB) => {
  DB.run(`CREATE TABLE IF NOT EXISTS contacts
          (
              id          INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
              firstName   VARCHAR(60),
              lastName    VARCHAR(60),
              email       VARCHAR(80),
              address     VARCHAR(200),
              company     VARCHAR(100),
              profession  VARCHAR(100),
              homePhone   VARCHAR(100),
              mobilePhone VARCHAR(100),
              country     VARCHAR(100),
              image       TEXT,
              description TEXT,
              createdAt   DATETIME DEFAULT CURRENT_TIMESTAMP
          )`);
};

/**
 *
 * @type {{db: exports.cached.Database}}
 */
module.exports = DB;
