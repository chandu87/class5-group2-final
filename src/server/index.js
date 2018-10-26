import express from "express";
import path from 'path';
import bodyParser from 'body-parser';

import apiRoutes from './routes';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', apiRoutes);

// Serve the static files from the React app
app.use(express.static(path.resolve(__dirname, '..', 'client')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname,'..', 'client', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});