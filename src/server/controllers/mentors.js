import SqlString from 'sqlstring';
import db from '../config/db';

export function listAllMentors(req, res) {
    const sql = SqlString.format('SELECT * FROM mentors WHERE active=?', [
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
  
  export function createMentor(req, res) {
    const jsonData = req.body;
    const sql = SqlString.format(`INSERT INTO mentors SET ?`, jsonData);
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
  
  export function getMentorById(req, res) {
    const internshipId = req.params.id;
    const sql = SqlString.format(
      'SELECT * FROM mentors WHERE id = ? AND is_active = ?',
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
  
  export function updateMentor(req, res) {
    const internshipId = req.params.id;
    const jsonData = req.body;
  
    const sql = SqlString.format(`UPDATE mentors SET ? WHERE id = ?`, [
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
  
  export function deleteMentor(req, res) {
    const internshipId = req.params.id;
    const sql = SqlString.format(`UPDATE mentors SET ? WHERE id = ?`, [
      {
        is_active: false,
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