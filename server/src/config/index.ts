import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 2023,
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3000',
};
