

const express = require ('express');
const app = express();
const apiRoutes = require('./routes/api')
const cors = require("cors") // cors middleware for cors issue from localhost

app.use(express.json()); // Parse JSON bodies
app.use(cors()); // enable cors for all routes

// Routes
app.use('/api', apiRoutes);

// backend running on localhost 5000 with frontend react on 3000
  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));