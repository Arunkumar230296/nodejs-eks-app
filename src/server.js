const createApp = require("./app");

const PORT = Number(process.env.PORT) || 3000;
const server = createApp();

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Node.js application listening on port ${PORT}`);
});

function shutdown(signal) {
  console.log(`${signal} received. Shutting down gracefully.`);

  server.close(() => {
    process.exit(0);
  });

  setTimeout(() => {
    process.exit(1);
  }, 10000).unref();
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));