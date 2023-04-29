/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        username: "devasnhbhatt10",
        password: "6DKXy6QypJ7Sr7JX",
        cluster: "cluster0",
        database: "blog-dev",
      }
    };
  }
  return {
    env: {
      username: "devasnhbhatt10",
      password: "6DKXy6QypJ7Sr7JX",
      cluster: "cluster0",
      database: "blog",
    }
  };
};
