const http = require("http");

const port = Number(process.env.PORT) || 3000;
const host = "0.0.0.0";

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload, null, 2));
}

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/health") {
    return sendJson(response, 200, {
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date().toISOString()
    });
  }

  if (method === "GET" && url === "/") {
    return sendJson(response, 200, {
      message: "Node.js deployment test app is running",
      hostname: process.env.HOSTNAME || "local",
      env: process.env.NODE_ENV || "development",
      port
    });
  }

  return sendJson(response, 404, {
    error: "Not Found"
  });
});

server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
