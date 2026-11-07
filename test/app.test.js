const { test } = require("node:test");
const assert = require("node:assert/strict");
const createApp = require("../src/app");

test("GET /health returns healthy status", async () => {
  const server = createApp();

  await new Promise(resolve => server.listen(0, resolve));

  try {
    const port = server.address().port;
    const response = await fetch(`http://127.0.0.1:${port}/health`);
    const data = await response.json();

    assert.equal(response.status, 200);
    assert.equal(data.status, "healthy");
  } finally {
    await new Promise((resolve, reject) => {
      server.close(error => error ? reject(error) : resolve());
    });
  }
});

test("GET / returns application information", async () => {
  const server = createApp();

  await new Promise(resolve => server.listen(0, resolve));

  try {
    const port = server.address().port;
    const response = await fetch(`http://127.0.0.1:${port}/`);
    const data = await response.json();

    assert.equal(response.status, 200);
    assert.equal(data.message, "Node.js EKS application is running");
  } finally {
    await new Promise((resolve, reject) => {
      server.close(error => error ? reject(error) : resolve());
    });
  }
});

test("Unknown route returns 404", async () => {
  const server = createApp();

  await new Promise(resolve => server.listen(0, resolve));

  try {
    const port = server.address().port;
    const response = await fetch(`http://127.0.0.1:${port}/unknown`);

    assert.equal(response.status, 404);
  } finally {
    await new Promise((resolve, reject) => {
      server.close(error => error ? reject(error) : resolve());
    });
  }
});