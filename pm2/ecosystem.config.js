
module.exports = {
  apps: [
    {
      name: 'fundacao-backend',
      script: './server.js',
      cwd: './backend',
      watch: true,
      env_production: {
        NODE_ENV: 'production',
        MONGO_URI: process.env.MONGO_URI,
        JWT_SECRET: process.env.JWT_SECRET
      },
    },
  ],
};
