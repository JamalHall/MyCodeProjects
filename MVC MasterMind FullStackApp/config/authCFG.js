
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL
  };

// auth router attaches /login, /logout, and /callback routes to the baseURL
const authConfig = config

module.exports = authConfig;

