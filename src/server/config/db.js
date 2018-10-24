import mysql from 'mysql2';

const DATABASE_URL =
  process.env.DATABASE_URL || 'mysql://bhgiry75if89y54y:z87wuynq5ru45x4d@e7qyahb3d90mletd.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/o15gaxnbvz5n269f';
const connection = mysql.createConnection(DATABASE_URL);

export default connection;