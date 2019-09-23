const express = require('express');
const app = express();
const port = 3300;
const cors = require('cors');
const bodyParser = require('body-parser');
const DB = require('./lib/db');

// Enable cors
app.use(cors());

// Enable json response
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

/**
 * Default route
 */
app.get('/', (req, resp) => {
  resp.send('Interactive Contact Book Api');
});

/**
 * Add new contact endpoint
 */
app.post('/addContact', (req, resp) => {
  const firstName = req.body.firstName;
  const lastName = req.body.firstName;
  const email = req.body.firstName;
  const address = req.body.firstName;
  const company = req.body.firstName;
  const profession = req.body.firstName;
  const homePhone = req.body.firstName;
  const mobilePhone = req.body.firstName;
  const country = req.body.firstName;
  const image = req.body.firstName;
  const description = req.body.firstName;
  DB.run(`
      INSERT INTO contacts(firstName, lastName, email, address, company, profession, homePhone, mobilePhone, country, image, description)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `, [firstName, lastName, email, address, company, profession, homePhone, mobilePhone, country, image, description], (err) => {
    if (err) {
      resp.status(500).json({ error: err });
      return;
    }
    resp.status(200).json({ success: true });
  });
});

/**
 * Get contact by id endpoint
 */
app.get('/contact/:id', (req, resp) => {
  DB.get(`SELECT * FROM contacts WHERE id=?`, [req.params.id], (err, row) => {
    if (err) {
      resp.status(500).json({ error: err });
    } else {
      resp.status(200).json({ success: true, data: row });
    }
  });
});

/**
 * All contacts endpoint
 */
app.get('/all', (req, resp) => {
  DB.all(`SELECT * FROM contacts`, [], (err, rows) => {
    if (err) {
      resp.status(500).json({ error: err });
    } else {
      resp.status(200).json({ success: true, contacts: rows });
    }
  });
});

/**
 * Delete contact endpoint
 */
app.delete('/contact/:id', (req, resp) => {
  DB.run(`DELETE FROM contacts WHERE id=?`, [req.params.id], function (err) {
    if (err) {
      resp.status(500).json({ error: err });
    } else {
      resp.status(200).json({ success: true, data: `Row(s) deleted ${this.changes}` });
    }
  });
});

/**
 * Search contacts by first name and last name endpoint
 */
app.get('/search/:term', (req, resp) => {
  DB.all("SELECT * FROM contacts WHERE firstName LIKE ?1 OR lastName LIKE ?1",
    [`%${req.params.term.toLowerCase()}%`], (err, rows) => {
      if (err) {
        resp.status(500).json({ error: err });
      } else {
        resp.status(200).json({ success: true, contacts: rows });
      }
    });
});

/**
 * Start node server
 */
app.listen(port, () => console.log(`Listening on port ${port}`));