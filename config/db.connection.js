// In db.connection.js
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://kyle:devan@mhw-backend.qeucouv.mongodb.net/test");

mongoose.connection.on('connected', () => {
  console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`); 
});

mongoose.connection.on('error', (error) => {
  console.log('MongoDB connection error 😥', error);
});

mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected  ⚡️ 🔌 ⚡️'));