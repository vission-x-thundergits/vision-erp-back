// config.js

const config = {
  // Server configuration
  server: {
    port: process.env.PORT || 4000, // Port number for the server
  },

  // Database configuration
  database: {
    url: process.env.MONGODB_URI || 'mongodb+srv://thundergits:123@cluster0.z23dt.mongodb.net/schoolDb', // MongoDB connection URI
  },

  // Authentication configuration
  auth: {
    jwtSecret: process.env.JWT_SECRET || '5#vGcYr%$pQ97Wz4@B2&fT!eS6M*dH8x', // Secret key for JWT authentication,
    tokenExpiration: "30d"
  },

  // CORS configuration
  cors: {
    allowedOrigins: process.env.ALLOWED_ORIGINS || ['http://localhost:3000'], // List of allowed origins for CORS
  },
};


module.exports = config