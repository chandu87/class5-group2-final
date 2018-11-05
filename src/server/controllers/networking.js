import SqlString from 'sqlstring';
import db from '../config/db';

export function listAllNetworking(req, res){
  const sql = SqlString.format('SELECT * FROM networking WHERE active=?', [true]);
  console.log(sql);
  db.execute(sql, (err, rows)=>{
      if(err){
          res.status(500).send(err);
            return;
      }
      res.send(rows);
  })
}

export function searchNetwork(req,res){
  let searchQuery = req.params.searchQuery;
  searchQuery = `%${searchQuery}%`;
const sql = SqlString.format('SELECT * FROM networking WHERE sector_activity LIKE ? AND active = ?',  [searchQuery,true]);
console.log(sql);

db.execute(sql,(err, result)=>{
  if(err){
      res.status(500).send(err);
      return;
  }
    
  if (result.length === 0) {
    res.status(404).send('Not Found');
    return;
  }

  res.send(result);
})
}

export function createNetwork(req,res){
    const jsonData = req.body;
const sql = SqlString.format('INSERT INTO networking SET ?', jsonData);
console.log(sql);

db.execute(sql,(err, result)=>{
    if(err){
        res.status(500).send(err);
        return;
    }
    res.send(result);
})
}
export function updateNetwork(req,res){
    const networkingId = req.params.id;
    const jsonData = req.body;
  
    const sql = SqlString.format(`UPDATE networking SET ? WHERE id = ?`, [
      jsonData,
      networkingId,
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
  
      res.send(result);
    });

}
export function deleteNetwork(req,res){
    const networkingId = req.params.id;
    const sql = SqlString.format(`UPDATE networking SET ? WHERE id = ?`, [
      {
        active: false,
      },
      networkingId,
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
  
      res.send(result);
    });
}
export function getNetworkById(req,res){
    const networkingId = req.params.id;
    const sql = SqlString.format(
      'SELECT * FROM networking WHERE id = ? AND active = ?',
      [networkingId, true],
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