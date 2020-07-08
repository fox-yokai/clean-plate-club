const express = require('express');
const app = express();

const PORT = 5000;

// Start the Express server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);