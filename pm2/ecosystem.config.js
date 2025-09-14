module.exports = {
  apps: [
    {
      name: 'fundacao-backend',
      script: './server/server.js',
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
        MONGO_URI: process.env.MONGO_URI,
        JWT_SECRET: process.env.JWT_SECRET
      },
    },
  ],
};
