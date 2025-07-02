const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT ;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(' Connected to MongoDB'))
.catch(err => console.error(' MongoDB connection error:', err));

app.use(express.json());
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
