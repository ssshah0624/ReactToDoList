const express = require('express');
const app = express();
const dbRoutes = require('./routes/databaseAccess.js');

// This line makes the build folder publicly available.
app.use(express.static('build'));
app.use('/db', dbRoutes);

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});
