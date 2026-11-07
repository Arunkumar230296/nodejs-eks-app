const http = require("node:http");

function createApp() {
  return http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("X-Content-Type-Options", "nosniff");

    if (req.method === "GET" && req.url === "/health") {
      res.writeHead(200);
      return res.end(JSON.stringify({
        status: "healthy"
      }));
    }

    if (req.method === "GET" && req.url === "/") {
      res.writeHead(200);
      return res.end(JSON.stringify({
        message: "Node.js EKS application is running",
        version: process.env.APP_VERSION || "1.0.0",
        environment: process.env.NODE_ENV || "production"
      }));
    }

    res.writeHead(404);
    return res.end(JSON.stringify({
      message: "Not Found"
    }));
  });
}

module.exports = createApp;