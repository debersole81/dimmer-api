import http from 'http';
import dotenv from 'dotenv';
import cors from 'cors';
import nocache from 'nocache';
import app from './app.js';

// Get what is needed from .env
dotenv.config();
// write this as a function so I can test it
if (!(process.env.PORT && process.env.CLIENT_ORIGIN_URL)) {
  throw new Error('Missing required enviornmnet variables. Check docs for more info.');
}

// Get the origin URL based on the env type
let CLIENT_ORIGIN_URL;
if (process.env.NODE_ENV === 'production') {
  CLIENT_ORIGIN_URL = process.env.CLIENT_ORIGIN_URL;
} else {
  CLIENT_ORIGIN_URL = process.env.CLIENT_ORIGIN_DEV_URL;
}

// Globals
const server = http.createServer(app);
const PORT: number = Number(process.env.PORT);

// Disable client-side caching
app.use(nocache());

// Set CORS policy
const allowedOrigins = [CLIENT_ORIGIN_URL];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        return callback(null, true);
      }
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `The CORS policy for this site (${origin}) does not allow access from the specified Origin.`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Authorization', 'Content-Type'],
    maxAge: 86400,
  }),
);

// Build server
function startServer() {
  server.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
  });
}

startServer();

export default server;
