const express = require('express');
const app = express();
const port = 3000;
const questionRoutes = require('./routes/question');
const sequelize = require('./database');
const cors = require('cors');

// Allow requests from the specific frontend URL
app.use(cors());

app.use(express.static('public'));
app.use('/api', questionRoutes);

sequelize.sync().then(() => {
  console.log('Database connected');
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
