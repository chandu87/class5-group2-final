import SqlString from 'sqlstring';
import db from '../config/db';

export function listAllInternships(req, res) {
  const sql = SqlString.format('SELECT * FROM internships WHERE active=?', [
    true,
  ]);
  console.log(sql);
  db.execute(sql, (err, rows) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }

    res.send(rows);
  });
}

export function createInternship(req, res) {
  const jsonData = req.body;
  const sql = SqlString.format(`INSERT INTO internships SET ?`, jsonData);
  console.log(sql);

  db.execute(sql, (err, result) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }

    console.log(result);

    res.send('success');
  });
}

export function getInternshipById(req, res) {
  const internshipId = req.params.id;
  const sql = SqlString.format(
    'SELECT * FROM internships WHERE id = ? AND active = ?',
    [internshipId, true],
  );
  console.log(sql);

  db.execute(sql, (err, rows) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }

    if (rows.length === 0) {
      res.status(404).send('Not Found');
      return;
    }

    res.send(rows[0]);
  });
}

export function updateInternship(req, res) {
  const internshipId = req.params.id;
  const jsonData = req.body;

  const sql = SqlString.format(`UPDATE internships SET ? WHERE id = ?`, [
    jsonData,
    internshipId,
  ]);
  
  console.log(sql);

  db.execute(sql, (err, result) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }

    if (!result.affectedRows) {
      res.status(404).send('Not Found');
      return;
    }

    res.send('success');
  });
}

export function deleteInternship(req, res) {
  const internshipId = req.params.id;
  const sql = SqlString.format(`UPDATE internships SET ? WHERE id = ?`, [
    {
      active: false,
    },
    internshipId,
  ]);

  console.log(sql);

  db.execute(sql, (err, result) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }

    if (!result.affectedRows) {
      res.status(404).send('Not Found');
      return;
    }

    res.send('success');
  });
}