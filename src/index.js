const express = require('express');
const ENV = require('./environments');
const connectDB = require('./models/database');
const router = require('./routes');

const app = express();

const { PORT } = ENV;

app.use(express.json());
app.use('/api/v1', router);

connectDB();

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
