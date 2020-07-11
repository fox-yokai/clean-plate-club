const express = require('express');
const app = express();

const PORT = 5000;

// Connect to the Mongo DB
await mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/babish",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

// Start the Express server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);