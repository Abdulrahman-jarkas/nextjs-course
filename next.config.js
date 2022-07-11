const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER)
    return {
      env: {
        db_username: "abdulrhman",
        db_password: "jarkas",
        db_clustername: "cluster0",
        db_name: "blog-app-dev",
      },
    };

  return {
    env: {
      db_username: "abdulrhman",
      db_password: "jarkas",
      db_clustername: "cluster0",
      db_name: "blog-app",
    },
  };
};
