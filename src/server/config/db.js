import mysql from 'mysql2';

const DATABASE_URL =
  process.env.DATABASE_URL || 'mysql://root:password@localhost:3306/hyf_thread';
const connection = mysql.createConnection(DATABASE_URL);

export default connection;